import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dataset-selector',
  templateUrl: './dataset-selector.component.html',
  styleUrls: ['./dataset-selector.component.css']
})
export class DatasetSelectorComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();
  selectedDataset: string;

  constructor() { }

  ngOnInit(): void {
  }

  public onDatabaseSelect(value, check: boolean) {
    this.selectedDataset = check ? value : "";
    this.newItemEvent.emit(this.selectedDataset);
  }

}
