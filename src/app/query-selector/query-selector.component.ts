import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-query-selector',
  templateUrl: './query-selector.component.html',
  styleUrls: ['./query-selector.component.css']
})
export class QuerySelectorComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();
  @Input() dataset;
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
    console.log('here');
    console.log(name)
    this.newItemEvent.emit(name);
  }

}
