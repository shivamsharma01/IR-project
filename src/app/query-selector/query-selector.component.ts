import { Rectangle } from './../file-upload/file-upload.component';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-query-selector',
  templateUrl: './query-selector.component.html',
  styleUrls: ['./query-selector.component.css']
})
export class QuerySelectorComponent implements OnInit {
  @Output() imageSelectionObjEvent = new EventEmitter<any>();
  @Output() tabChangeEvent = new EventEmitter<Number>();
  @Output() newBoundingBoxEvent = new EventEmitter<Rectangle>();
  @Input() dataset;
  tabIndex = 0;

  constructor() { }

  ngOnInit(): void {  
  }

  public onTabChange(event) {
    if (event.index == 0) {
      this.tabIndex = 0;
      this.tabChangeEvent.emit(0);
      this.newBoundingBoxEvent.emit(null);
    } else {
      this.tabChangeEvent.emit(1);
      this.tabIndex = 1;
    }
  }
 
  public onImageSelect(obj) {
    console.log(obj);
    this.imageSelectionObjEvent.emit(obj);
  }

  public onBoundingBoxCreation(event) {
    this.newBoundingBoxEvent.emit(event);
  }

}
