import { Rectangle } from './../file-upload/file-upload.component';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-query-images',
  templateUrl: './query-images.component.html',
  styleUrls: ['./query-images.component.css']
})
export class QueryImagesComponent implements OnInit {
  @Output() imageSelectionObjEvent = new EventEmitter<string>();
  @Output() newBoundingBoxEvent = new EventEmitter<Rectangle>();
  @Input() dataset;
  @Input() isBoundingBox;
  responsiveOptions;
  curObj;
  constructor() { }

  ngOnInit(): void {
    
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
  }
    
  public onImageSelect(obj) {
    console.log(obj);
    this.curObj = null;
    setTimeout(() => {
      this.curObj = obj;
      this.imageSelectionObjEvent.emit(obj);
      this.newBoundingBoxEvent.emit(null);
    }, 1);
  }

  public onBoundingBoxCreation(event) {
    this.newBoundingBoxEvent.emit(event);
  }


}
