import { Component, OnInit} from "@angular/core";

@Component({
  selector: "app-ml",
  templateUrl: "./ml.component.html",
  styleUrls: ["./ml.component.scss"],
})
export class MLComponent implements OnInit {
  selectedDataset = "";
  kVal = 10;
  imageName = "";
  display = false;
  dataset: Product[];


  public dialogClose(val) {
    this.display = val;
  }

  onDatasetSelect(value: string) {
    this.selectedDataset = value;
  }

  onImageSelect(value: string) {
    this.imageName = value;
  }

  onKSelect(value: string) {
    this.kVal = Number(value);
  }

  ngOnInit() {
    this.dataset = [];
    this.dataset.push({
      id: "1001", code: "nvklal433",  name: "Black Watch", description: "Product Description", image: "black-watch.jpg", price: 72,
      category: "Accessories", quantity: 61, inventoryStatus: "INSTOCK", rating: 4, });
	this.dataset.push({
	id: "1001", code: "nvklal433",  name: "Black Watch", description: "Product Description", image: "black-watch.jpg", price: 72,
	category: "Accessories", quantity: 61, inventoryStatus: "INSTOCK", rating: 4, });
	this.dataset.push({
		id: "1001", code: "nvklal433",  name: "Black Watch", description: "Product Description", image: "black-watch.jpg", price: 72,
		category: "Accessories", quantity: 61, inventoryStatus: "INSTOCK", rating: 4, });
	this.dataset.push({
	id: "1001", code: "nvklal433",  name: "Black Watch", description: "Product Description", image: "black-watch.jpg", price: 72,
	category: "Accessories", quantity: 61, inventoryStatus: "INSTOCK", rating: 4, });
  }
}

export interface Product {
	id?: string;
	code?: string;
	name?: string;
	description?: string;
	price?: number;
	quantity?: number;
	inventoryStatus?: string;
	category?: string;
	image?: string;
	rating?: number;
  }
