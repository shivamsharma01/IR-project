import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-k-selector',
  templateUrl: './top-k-selector.component.html',
  styleUrls: ['./top-k-selector.component.css']
})
export class TopKSelectorComponent implements OnInit {
  @Output() newKvalueSelectEvent = new EventEmitter<string>();
  kVal: number = 10;

  constructor() { }

  ngOnInit(): void {
  }

  onKSelect(val) {
    this.newKvalueSelectEvent.emit(val);
  }

}
