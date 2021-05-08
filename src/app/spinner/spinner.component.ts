import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  @Output() newDialogCloseEvent = new EventEmitter<string>();
  @Input() display

  constructor() { }

  ngOnInit(): void {
  }
  
  public dialogClose() {
    this.display = !this.display;
    this.newDialogCloseEvent.emit(this.display);
  }
}
