import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
} from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-ml",
  templateUrl: "./ml.component.html",
  styleUrls: ["./ml.component.scss"],
})
export class MLComponent implements OnInit, AfterViewInit {
  @ViewChild("canvasE")
  myCanvas: ElementRef<HTMLCanvasElement>;
  public context: CanvasRenderingContext2D;
  rect: Rectangle = new Rectangle();
  imageObj;
  selectedDataset = "";
  kVal = 10;
  imageName = "";
  dataset: Product[];
  responsiveOptions;
  display = false;
  drag = false;
  rotateflag = false;
  degree = 0;

  ngAfterViewInit() {
    this.context = this.myCanvas.nativeElement.getContext("2d");
    this.imageObj = new Image();
    this.imageObj.onload = () => {
		this.myCanvas.nativeElement.width=this.imageObj.width;
		this.myCanvas.nativeElement.height=this.imageObj.height;
      this.context.drawImage(
        this.imageObj,
        0,
        0,
        this.imageObj.width,
        this.imageObj.height,
        0,
        0,
        this.myCanvas.nativeElement.width,
        this.myCanvas.nativeElement.height
      );
    };
    this.imageObj.src = "./assets/img/city.jpg";
  }

  onMouseUp(e) {
    this.drag = false;
  }

  onMouseMove(e) {
    if (this.drag) {
      this.drawRotated(this.degree);
      this.rect.w =
        e.pageX - this.myCanvas.nativeElement.offsetLeft - this.rect.startX;
      this.rect.h =
        e.pageY - this.myCanvas.nativeElement.offsetTop - this.rect.startY;
      this.context.strokeStyle = "red";
	  this.context.lineWidth = 5;
      this.context.strokeRect(
        this.rect.startX,
        this.rect.startY,
        this.rect.w,
        this.rect.h
      );
    }
  }

  onMouseDown(e) {
    this.rect.startX = e.pageX - this.myCanvas.nativeElement.offsetLeft;
    this.rect.startY = e.pageY - this.myCanvas.nativeElement.offsetTop;
    this.drag = true;
  }

  drawRotated(degrees) {
    this.context.clearRect(
      0,
      0,
      this.myCanvas.nativeElement.width,
      this.myCanvas.nativeElement.height
    );
    this.context.save();
    this.context.translate(0, 0);
    this.context.rotate((degrees * Math.PI) / 180);
    this.context.drawImage(
      this.imageObj,
      0,
      0,
      this.imageObj.width,
      this.imageObj.height,
      0,
      0,
      this.myCanvas.nativeElement.width,
      this.myCanvas.nativeElement.height
    );
    this.context.restore();
  }

  public dialogClose() {
    this.display = !this.display;
  }

  onDatasetSelect(value: string) {
    this.selectedDataset = value;
  }

  onImageSelect(value: string) {
    this.imageName = value;
  }

  onKSelect(value: string) {
    this.kVal = Number(value);
  }
  
  public search() {
    console.log(this.rect);
    this.display = true;
	if (!this.rect.startX) {
		this.rect.startX = 0
	}
	if (!this.rect.startY) {
		this.rect.startY = 0
	}
	if (!this.rect.w) {
		this.rect.w = this.imageObj.width;
	}
	if (!this.rect.h) {
		this.rect.h = this.imageObj.height;
	}
	if(this.rect.w < 0 && this.rect.h < 0) {
		let temp = this.rect.w;
		this.rect.w = this.rect.startX;
		this.rect.startX = this.rect.w + temp;
		temp = this.rect.h;
		this.rect.h = this.rect.startY;
		this.rect.startY = this.rect.h + temp;
		console.log(this.rect.startX, this.rect.startY, this.rect.w, this.rect.h);
	} else if (this.rect.w < 0) {
		let temp = this.rect.w;
		this.rect.w = this.rect.startX;
		this.rect.startX = this.rect.w + temp;
		temp = this.rect.startY;
		console.log(this.rect.startX, this.rect.startY, this.rect.w,  this.rect.startY + this.rect.h);
	} else if (this.rect.h < 0) {
		let temp = this.rect.h;
		this.rect.h = this.rect.startY;
		this.rect.startY = this.rect.h + temp;
		temp = this.rect.startX;
		console.log(this.rect.startX, this.rect.startY, this.rect.w + this.rect.startX,  this.rect.h);
	} else {
		console.log(this.rect.startX, this.rect.startY, this.rect.startX + this.rect.w, this.rect.startY + this.rect.h);
	}
	
  }

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: "1024px",
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: "768px",
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: "560px",
        numVisible: 1,
        numScroll: 1,
      },
    ];
    this.dataset = [];
    this.dataset.push({
      id: "1001", code: "nvklal433",  name: "Black Watch", description: "Product Description", image: "black-watch.jpg", price: 72,
      category: "Accessories", quantity: 61, inventoryStatus: "INSTOCK", rating: 4, });
	this.dataset.push({
	id: "1001", code: "nvklal433",  name: "Black Watch", description: "Product Description", image: "black-watch.jpg", price: 72,
	category: "Accessories", quantity: 61, inventoryStatus: "INSTOCK", rating: 4, });
	this.dataset.push({
		id: "1001", code: "nvklal433",  name: "Black Watch", description: "Product Description", image: "black-watch.jpg", price: 72,
		category: "Accessories", quantity: 61, inventoryStatus: "INSTOCK", rating: 4, });
	this.dataset.push({
	id: "1001", code: "nvklal433",  name: "Black Watch", description: "Product Description", image: "black-watch.jpg", price: 72,
	category: "Accessories", quantity: 61, inventoryStatus: "INSTOCK", rating: 4, });
  }
}

export interface Product {
	id?: string;
	code?: string;
	name?: string;
	description?: string;
	price?: number;
	quantity?: number;
	inventoryStatus?: string;
	category?: string;
	image?: string;
	rating?: number;
  }

  class Rectangle {
	startX: number;
	startY: number;
	w: number;
	h: number;
  }
  