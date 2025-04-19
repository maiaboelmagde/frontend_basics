import { Component } from '@angular/core';

@Component({
  selector: 'app-page2',
  imports: [],
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css'
})
export class Page2Component {
  images = ['Images/img1.jpeg', 'Images/img2.jpeg', 'Images/img3.jpeg', 'Images/img4.jpeg', 'Images/img5.png'];
  ImgIdx = 0;
  src:string = this.images[this.ImgIdx];

  interval:any;

  getNextImg(){
    if(this.ImgIdx<this.images.length-1){
      this.ImgIdx++;
    }else{
      this.ImgIdx = 0;
    }
    this.src=this.images[this.ImgIdx];
    /*
    switch(this.src){
      case 'Images/img1.jpeg':
        this.src = 'Images/img2.jpeg';
        break;
      case 'Images/img2.jpeg':
        this.src = 'Images/img3.jpeg';
        break;
      case 'Images/img3.jpeg':
        this.src = 'Images/img4.jpeg';
        break;
      case 'Images/img4.jpeg':
        this.src = 'Images/img5.png';
        break;
      case 'Images/img5.png':
        this.src = 'Images/img1.jpeg';
        break;
      default:
        this.src = 'Images/img1.jpeg';
    }
        */
  }

  getPrevImg(){

    if(this.ImgIdx>0){
      this.ImgIdx--;
    }else{
      this.ImgIdx = this.images.length-1;
    }
    this.src=this.images[this.ImgIdx];
    /*
    switch(this.src){
      case 'Images/img1.jpeg':
        this.src = 'Images/img5.png';
        break;
      case 'Images/img2.jpeg':
        this.src = 'Images/img1.jpeg';
        break;
      case 'Images/img3.jpeg':
        this.src = 'Images/img2.jpeg';
        break;
      case 'Images/img4.jpeg':
        this.src = 'Images/img3.jpeg';
        break;
      case 'Images/img5.png':
        this.src = 'Images/img4.jpeg';
        break;
      default:
        this.src = 'Images/img1.jpeg';
    }
        */
  }

  startSlider(){
    this.interval = setInterval(()=>{
      this.getNextImg();
    },1000);
  }

  stopSlider(){
    clearInterval(this.interval);
  }
}
