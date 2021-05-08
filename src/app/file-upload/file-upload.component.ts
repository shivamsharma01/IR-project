import { Component, OnInit, Output, ElementRef, ViewChild, EventEmitter } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import {MessageService} from 'primeng/api';

@Component({
  selector: "app-file-upload",
  templateUrl: "./file-upload.component.html",
  styleUrls: ["./file-upload.component.css"],
})
export class FileUploadComponent implements OnInit {
  @Output() newImageUploadEvent = new EventEmitter<any>();
  @Output() newBoundingBoxEvent = new EventEmitter<Rectangle>();  
  @ViewChild("canvasE")
  myCanvas: ElementRef<HTMLCanvasElement>;
  public context: CanvasRenderingContext2D;
  rect: Rectangle = new Rectangle();
  uploadedFiles = [];
  imageObj;
  drag = false;
  rotateflag = false;
  degree = 0;
	url: any;

  constructor(private messageService: MessageService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {}

  onMouseUp(e) {
    this.drag = false;
    this.newBoundingBoxEvent.emit(this.rect);
  }

  onUpload(event) {
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

    var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		
		reader.onload = (_event) => {
			this.url = reader.result; 
      this.drawOnCanvas();
		}
	}

  drawOnCanvas() {
    this.imageObj = new Image();
    this.imageObj.onload = () => {
      this.myCanvas.nativeElement.width = this.imageObj.width;
      this.myCanvas.nativeElement.height = this.imageObj.height;
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
      this.myCanvas.nativeElement.toDataURL('image/png');
    };
    this.imageObj.src = this.url;
    this.newImageUploadEvent.emit(this.imageObj.src);
  }

}

export class Rectangle {
  startX: number;
  startY: number;
  w: number;
  h: number;
}
