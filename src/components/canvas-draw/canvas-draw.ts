import { Polyline } from './../../app/model/polyline.model';
import { Component, ViewChild, Renderer } from '@angular/core';
import { AlertController, Platform } from 'ionic-angular';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { ToastController } from 'ionic-angular';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import * as io from 'socket.io-client';

@Component({
  selector: 'canvas-draw',
  templateUrl: 'canvas-draw.html'
})
export class CanvasDraw {

  @ViewChild('myCanvas') canvas: any;
  width: number;
  height: number;

  canvasElement: any;
  lastX: number;
  lastY: number;
  canDraw: boolean = true;

  socket:any

  currentColor: string = 'black';
  currentSize: string = 'medium';
  brushSize: number = 10;
  textSize: number = 35;

  isDrawing: boolean = false;
  tempPolyline: Polyline;

  history: Polyline[] = [];
  redoHistiry: Polyline[] = [];
  historyIndex = 0;

  textHistory = [];
  redoTextHistory = [];
  textHistoryIndex = 0;
  
  actions = [];
  redoActions = [];

  isOnline = false;

  constructor(public platform: Platform, public renderer: Renderer, public alertCtrl: AlertController, private base64ToGallery: Base64ToGallery, private toastCtrl: ToastController, private androidPermissions: AndroidPermissions) {
    this.width = platform.width();
    this.height = platform.height();

    if (this.platform.is('android')){
      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(
        success => console.log('Permission granted'),
        err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
      );
      
      this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);
    }
   
  }

  ngAfterViewInit(){

    this.canvasElement = this.canvas.nativeElement;

    this.renderer.setElementAttribute(this.canvasElement, 'width', this.platform.width() + '');
    this.renderer.setElementAttribute(this.canvasElement, 'height', this.platform.height() + '');
    this.clearCanvas();
  }

  handleStart(ev){    
    this.lastX = ev.touches[0].pageX;
    this.lastY = ev.touches[0].pageY;
  }
    
  handleMove(currentX, currentY){
    
    if (this.canDraw) {
      if (this.isDrawing) {
        this.tempPolyline.points.push({x: currentX, y: currentY});
      } else {
        this.tempPolyline = new Polyline(this.currentColor, this.brushSize);
        this.tempPolyline.points.push({x: this.lastX, y: this.lastY});
        this.isDrawing = true;
      }
      this.draw(this.lastX, this.lastY, currentX, currentY, this.brushSize, this.currentColor);
      if (this.isOnline){
        this.sendDrawing(this.lastX, this.lastY, currentX, currentY);        
      }
    }  

    this.lastX = currentX;
    this.lastY = currentY;
  }

  handleStop() {
    if (this.isDrawing){
      this.history.push(this.tempPolyline);
      this.isDrawing = false;
      this.historyIndex++;
      this.actions.push('draw');

      this.redoActions = [];
      this.redoHistiry = [];
      this.redoTextHistory = [];
    }
    
    if (!this.canDraw) {
      this.onAddText();
    }

  }

  draw(p_x, p_y, c_x, c_y, b_s, c_c){
    let ctx = this.canvasElement.getContext('2d');
    ctx.beginPath();
    ctx.lineJoin = "round";
    ctx.moveTo(p_x, p_y);
    ctx.lineTo(c_x, c_y);
    ctx.closePath();
    ctx.strokeStyle = c_c;
    ctx.lineWidth = b_s;
    ctx.stroke();    
  }

  changeColor(Color){
    this.currentColor = Color;
  }

  changeSize(size){
    if (size == 'small') {
      this.brushSize = 5;
      this.textSize = 20;
    } else if (size == 'medium') {
      this.brushSize = 10;
      this.textSize = 35;
    } else {
      this.brushSize = 20;
      this.textSize = 70;
    }
  }

  clearCanvas(){
    let ctx = this.canvasElement.getContext('2d');
    ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    this.history = [];
    this.redoHistiry = [];
    this.historyIndex = 0;

    this.textHistory = [];
    this.redoHistiry = [];
    this.textHistoryIndex = 0;
  }

  delete() {
    if (this.isOnline){
      this.socket.emit('delete', 'dd');
    }
    this.clearCanvas();
  }

  sendDrawing(p_x, p_y, c_x, c_y){
    let hist = {p_x :p_x/this.width, p_y: p_y/this.height, c_x: c_x/this.width, c_y: c_y/this.height, b_s: this.brushSize, c_c: this.currentColor};
    this.socket.emit('syncDrawing', JSON.stringify(hist));
  }

  sendWriting(text: string) {
    let hist = {text: text, x: this.lastX/this.width, y: this.lastY/this.height, color: this.currentColor, font: this.textSize + "px Comic Sans MS"};
    this.socket.emit('syncWriting', JSON.stringify(hist));    
  }


  onAddText() {
    let ctx = this.canvasElement.getContext('2d');
    ctx.font = this.textSize + "px Comic Sans MS";
    ctx.fillStyle = this.currentColor;

    let prompt = this.alertCtrl.create({
      title: 'Add Text',
      message: "Enter the text you want to add",
      inputs: [
        {
          name: 'text',
          placeholder: 'Text'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
          }
        },
        {
          text: 'Add',
          handler: data => {
            if (this.isOnline) {
              this.sendWriting(data.text);              
            }
            ctx.fillText(data.text, this.lastX, this.lastY);
            this.textHistory.push({text: data.text, x: this.lastX, y: this.lastY, color: this.currentColor, font: this.textSize + "px Comic Sans MS"});
            this.textHistoryIndex++;
            this.actions.push('write');            
          }
        }
      ]
    });
    prompt.present();    
  }

  onDisableDraw() {
    this.canDraw = false;
  }

  onEnableDraw() {
    this.canDraw = true;
  }

  onSelectColor() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Select Color');

    alert.addInput({
      type: 'radio',
      label: 'Red',
      value: 'red',
      checked: this.currentColor == 'red' ? true : false
    });
    alert.addInput({
      type: 'radio',
      label: 'Orange',
      value: 'orange',
      checked: this.currentColor == 'orange' ? true : false
    });
    alert.addInput({
      type: 'radio',
      label: 'Blue',
      value: 'blue',
      checked: this.currentColor == 'blue' ? true : false
    });
    alert.addInput({
      type: 'radio',
      label: 'Green',
      value: 'green',
      checked: this.currentColor == 'green' ? true : false
    });
    alert.addInput({
      type: 'radio',
      label: 'Black',
      value: 'black',
      checked: this.currentColor == 'black' ? true : false
    });
    alert.addInput({
      type: 'radio',
      label: 'White',
      value: 'white',
      checked: this.currentColor == 'white' ? true : false
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        this.changeColor(data);
      }
    });

    alert.present();

  }

  onSelectSize() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Set Pen Size');

    alert.addInput({
      type: 'radio',
      label: 'Small',
      value: 'small',
      checked: this.currentSize == 'small' ? true : false
    });
    alert.addInput({
      type: 'radio',
      label: 'Medium',
      value: 'medium',
      checked: this.currentSize == 'medium' ? true : false
    });
    alert.addInput({
      type: 'radio',
      label: 'Large',
      value: 'large',
      checked: this.currentSize == 'large' ? true : false
    });
   

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        this.changeSize(data);
      }
    });

    alert.present();

  }

  drawAllHistory() {
    for (let polyline of this.history) {
      let startX = polyline.points[0].x;
      let startY = polyline.points[0].y;
      for (let point of polyline.points) {
        this.draw(startX, startY, point.x, point.y, polyline.width, polyline.color);
        startX = point.x;
        startY = point.y;
      }
    }
  }

  drawAllTextHistory() {
    for (let writing of this.textHistory) {
      let ctx = this.canvasElement.getContext('2d');
      ctx.font = writing.font;
      ctx.fillStyle = writing.color;
      ctx.fillText(writing.text, writing.x, writing.y);
    }
  }

  undo() {
    if (this.isOnline){
      return;
    }
    if (this.actions.length == 0) {
      return;
    }
    let tempAction = this.actions.pop();
    this.redoActions.push(tempAction);
    if (tempAction == 'write') {
      if (this.textHistory.length > 0) {
        this.redoTextHistory.push( this.textHistory.pop() );
        this.textHistoryIndex--;        
      }
    }
    else {
      if (this.history.length > 0) {
        this.redoHistiry.push( this.history.pop() );
        this.historyIndex--;
      }
    }

    let ctx = this.canvasElement.getContext('2d');
    ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    this.drawAllTextHistory();
    this.drawAllHistory();
    
  }

  redo() {
    if (this.isOnline){
      return;
    }
    if (this.redoActions.length == 0){
      return;
    }
    let tempAction = this.redoActions.pop();
    this.actions.push(tempAction);
    if (tempAction == 'draw') {
      if (this.redoHistiry.length > 0) {
        this.history.push( this.redoHistiry.pop() );
        for (var i = this.historyIndex; i<this.history.length; i++) {
          let polyline = this.history[i];
          let startX = polyline.points[0].x;
          let startY = polyline.points[0].y;
          for (let point of polyline.points) {
            this.draw(startX, startY, point.x, point.y, polyline.width, polyline.color);
            startX = point.x;
            startY = point.y;
          }
        }
        this.historyIndex++; 
      }
    }
    else {
      if (this.redoTextHistory.length > 0) {
        this.textHistory.push( this.redoTextHistory.pop() );
        for (var j = this.textHistoryIndex; j<this.textHistory.length; j++) {
          let writing = this.textHistory[j];
          let ctx = this.canvasElement.getContext('2d');
          ctx.font = writing.font;
          ctx.fillStyle = writing.color;
          ctx.fillText(writing.text, writing.x, writing.y);
        }
        this.textHistoryIndex++;
      }
    }
  }

  sync() {
    if (!this.isOnline){
      this.clearCanvas();
      this.socket = io('http://192.168.1.100:3000');
      this.socket.on('syncDrawing', (hist) => {
        this.draw(hist.p_x*this.width, hist.p_y*this.height, hist.c_x*this.width, hist.c_y*this.height, hist.b_s, hist.c_c);
      });
      this.socket.on('syncWriting', (hist) => {
        let ctx = this.canvasElement.getContext('2d');
        ctx.font = hist.font;
        ctx.fillStyle = hist.color;
        ctx.fillText(hist.text, hist.x*this.width, hist.y*this.height);
      });
      this.socket.on('delete', (data) => {
        this.clearCanvas();
      });
      this.isOnline = true;
    } else {
      this.socket.disconnect();
      this.isOnline = false;
    }
  }

  saveToGallery() {
    
    const image = this.canvasElement.toDataURL();
    let base64Data = image.replace(/data:image\/png;base64,/, "");
    this.base64ToGallery.base64ToGallery(base64Data).then(
      (res) => {
        console.log('Saved image to gallery ', res)
        let toast = this.toastCtrl.create({
          message: 'Saved!',
          duration: 2500,
          position: 'top'
        });
        toast.present();
      },
      (err) => {
        let toast = this.toastCtrl.create({
          message: 'Cannot Saved!!',
          duration: 2500,
          position: 'top'
        });
        toast.present();
      }
    );
    
  }
  
}
