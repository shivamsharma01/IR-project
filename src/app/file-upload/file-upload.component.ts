import {
  Component,
  OnInit,
  Output,
  ElementRef,
  ViewChild,
  EventEmitter,
  Input,
} from "@angular/core";
import { throwError } from "rxjs";

@Component({
  selector: "app-file-upload",
  templateUrl: "./file-upload.component.html",
  styleUrls: ["./file-upload.component.css"],
})
export class FileUploadComponent implements OnInit {
  @Output() newBoundingBoxEvent = new EventEmitter<Rectangle>();
  @ViewChild("canvasE")
  myCanvas: ElementRef<HTMLCanvasElement>;
  @Input() inputImageObj;
  @Input() isBoundingBox;
  imageObj;
  public context: CanvasRenderingContext2D;
  rect: Rectangle = new Rectangle();
  uploadedFiles = [];
  url;
  drag = false;
  rotateflag = false;
  degree = 0;

  ngOnInit(): void {
    setTimeout(() => {
      this.drawOnCanvas();
    }, 1);
    // this.imageObj = this.inputImageObj;

    // var reader = new FileReader();
    // reader.readAsDataURL(event.target.files[0]);

    // reader.onload = (_event) => {
    // 	this.url = reader.result;
    //}
  }

  public onMouseUp(e) {
    this.drag = false;
    this.newBoundingBoxEvent.emit(this.rect);
  }

  public onMouseMove(e) {
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

  public onMouseDown(e) {
    this.rect.startX = e.pageX - this.myCanvas.nativeElement.offsetLeft;
    this.rect.startY = e.pageY - this.myCanvas.nativeElement.offsetTop;
    this.drag = true;
  }

  public drawRotated(degrees) {
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

  public selectFile(event: any) {}

  public drawOnCanvas() {
    this.imageObj = new Image();
    if (this.isBoundingBox) {
      this.context = this.myCanvas.nativeElement.getContext("2d");
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
        this.myCanvas.nativeElement.toDataURL("image/png");
      };
    }
    this.imageObj.src =
      this.inputImageObj.image["changingThisBreaksApplicationSecurity"];
  }
}

export class Rectangle {
  startX: number;
  startY: number;
  w: number;
  h: number;
}
