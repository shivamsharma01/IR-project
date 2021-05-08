import { Component, OnInit, ElementRef, ViewChild, SecurityContext } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import {MessageService} from 'primeng/api';

@Component({
  selector: "app-file-upload",
  templateUrl: "./file-upload.component.html",
  styleUrls: ["./file-upload.component.css"],
})
export class FileUploadComponent implements OnInit {
  @ViewChild("canvasE")
  myCanvas: ElementRef<HTMLCanvasElement>;
  @ViewChild('imageInput')
  imageInput: ElementRef;
  public context: CanvasRenderingContext2D;
  uploadedFiles = [];
  rect: Rectangle = new Rectangle();
  imageObj;
  drag = false;
  rotateflag = false;
  degree = 0;
  
	url: any; //Angular 11, for stricter type
	msg = "";

  constructor(private messageService: MessageService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {}

  onMouseUp(e) {
    this.drag = false;
  }

  onUpload(event) {
    console.log(event);
    //this.upload(event.files[0]);

    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
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

  selectFile(event: any) {
    this.context = this.myCanvas.nativeElement.getContext("2d");
    var mimeType = event.target.files[0].type;

    var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		
		reader.onload = (_event) => {
			this.url = reader.result; 
      this.upload();
		}
	}

  upload() {
    this.imageObj = new Image();
    this.imageObj.onload = () => {
      this.myCanvas.nativeElement.width = this.imageObj.width;
      this.myCanvas.nativeElement.height = this.imageObj.height;
      this.context.drawImage(this.imageObj, 0, 0);
      this.myCanvas.nativeElement.toDataURL('image/png');
    };
    this.imageObj.src = this.url;
  }

  public search() {
    console.log(this.rect);
    if (!this.rect.startX) {
      this.rect.startX = 0;
    }
    if (!this.rect.startY) {
      this.rect.startY = 0;
    }
    if (!this.rect.w) {
      this.rect.w = this.imageObj.width;
    }
    if (!this.rect.h) {
      this.rect.h = this.imageObj.height;
    }
    if (this.rect.w < 0 && this.rect.h < 0) {
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
      console.log(
        this.rect.startX,
        this.rect.startY,
        this.rect.w,
        this.rect.startY + this.rect.h
      );
    } else if (this.rect.h < 0) {
      let temp = this.rect.h;
      this.rect.h = this.rect.startY;
      this.rect.startY = this.rect.h + temp;
      temp = this.rect.startX;
      console.log(
        this.rect.startX,
        this.rect.startY,
        this.rect.w + this.rect.startX,
        this.rect.h
      );
    } else {
      console.log(
        this.rect.startX,
        this.rect.startY,
        this.rect.startX + this.rect.w,
        this.rect.startY + this.rect.h
      );
    }
  }
}
class Rectangle {
  startX: number;
  startY: number;
  w: number;
  h: number;
}
