import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-query-selector',
  templateUrl: './query-selector.component.html',
  styleUrls: ['./query-selector.component.css']
})
export class QuerySelectorComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();
  @Input() dataset;

  constructor() { }

  ngOnInit(): void {
  }

  public onImageSelect(name) {
    this.newItemEvent.emit(name);
  }

}
