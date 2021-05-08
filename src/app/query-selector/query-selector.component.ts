import { Rectangle } from './../file-upload/file-upload.component';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-query-selector',
  templateUrl: './query-selector.component.html',
  styleUrls: ['./query-selector.component.css']
})
export class QuerySelectorComponent implements OnInit {
  @Output() newImageSelectionEvent = new EventEmitter<string>();
  @Output() newImageUploadEvent = new EventEmitter<any>();
  @Output() newBoundingBoxEvent = new EventEmitter<Rectangle>();
  @Input() dataset;
  tabIndex = 0;
  responsiveOptions;

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

  public onImageSelect(name) {
    this.newImageSelectionEvent.emit(name);
  }

  public onImageUpload(event) {
    this.newImageUploadEvent.emit(event);
  }

  public onBoundingBoxCreation(event) {
    this.newBoundingBoxEvent.emit(event);
  }

  public onTabChange(event) {
    if (event.index == 0) {
      this.tabIndex = 0;
      this.newImageUploadEvent.emit(null);
      this.newBoundingBoxEvent.emit(null);
    } else {
      this.tabIndex = 1;
      this.newImageSelectionEvent.emit(null);
    }
  }
}
