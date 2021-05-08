import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-model-selector',
  templateUrl: './model-selector.component.html',
  styleUrls: ['./model-selector.component.css']
})
export class ModelSelectorComponent implements OnInit {
  @Output() newModelSelectEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onModelSelect(val) {
    this.newModelSelectEvent.emit(val);
  }

}