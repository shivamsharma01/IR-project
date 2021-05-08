import { Annotation, RequestStructure } from './../main/main.component';
import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from "@angular/core";

@Component({
  selector: "app-confirm-send",
  templateUrl: "./confirm-send.component.html",
  styleUrls: ["./confirm-send.component.scss"],
})
export class ConfirmSendComponent implements OnInit  {
  @ViewChild("canv")
  myCanvas: ElementRef<HTMLCanvasElement>;
  public context: CanvasRenderingContext2D;
  data: RequestStructure;
  imgSrc;


  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.data = history.state;
    console.log(this.data);
    setTimeout(() => {
      if (!!this.data.imgName) {
        this.imgSrc = 'assets/img/theme/' + this.data.imgName;
      } else if(!!this.data.annotation) {
        this.drawOnCanvas(this.data.annotation, this.data.imgData);
      } else {
        this.imgSrc = this.data.imgData;
      }
    }, 1);
  }
  
  
  drawOnCanvas(obj: Annotation, img: string) {
    this.context = this.myCanvas.nativeElement.getContext("2d");
    const imageObjTemp = new Image();
    imageObjTemp.onload = () => {
      this.myCanvas.nativeElement.width = imageObjTemp.width;
      this.myCanvas.nativeElement.height = imageObjTemp.height;
      this.context.drawImage(
        imageObjTemp,
        obj.x1,
        obj.y1,
        obj.x2-obj.x1,
        obj.y2-obj.y1,
        0,
        0,
        this.myCanvas.nativeElement.width,
        this.myCanvas.nativeElement.height
      );
      this.imgSrc = this.myCanvas.nativeElement.toDataURL('image/png');
    };
    imageObjTemp.src = img;
    this.cdr.detectChanges();
  }
}
