import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { ApiService } from "./../api-service";
import { Router } from "@angular/router";
import { Rectangle } from "./../file-upload/file-upload.component";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  selectedDataset = null;
  selectedkVal = 10;
  tab = 0;
  selectedModelName = null;
  selectedImageName = null;
  selectedRectangleObj = null;
  display = false;
  dataset: Response[];

  constructor(
    private router: Router,
    private apiService: ApiService,
    private _sanitizer: DomSanitizer
  ) {}

  public dialogClose(val) {
    this.display = val;
  }

  public onTabChange(val) {
    this.selectedDataset = this.selectedDataset;
    this.selectedImageName = null;
    this.selectedRectangleObj = null;
    this.selectedkVal = 10;
    this.tab = val;
    this.apiService
      .getImages(this.selectedDataset, this.tab == 0 ? "annotated" : "original")
      .subscribe((response) => {
        this.dataset = response.map(
          (r) =>
            new Response(
              r.name,
              this._sanitizer.bypassSecurityTrustResourceUrl(
                "data:image/jpg;base64," + r.image
              )
            )
        );
        this.apiService.data[this.selectedDataset] = this.dataset;
      });
  }

  public onModelSelect(value: string) {
    this.selectedModelName = null;
    setTimeout(() => {
      this.selectedModelName = value;
      this.selectedDataset = null;
      this.selectedImageName = null;
      this.selectedRectangleObj = null;
      this.selectedkVal = 10;
    }, 100);
  }

  public onDatasetSelect(value: string) {
    this.selectedDataset = null;
    setTimeout(() => {
      this.selectedDataset = value;
      this.selectedImageName = null;
      this.selectedRectangleObj = null;
      this.selectedkVal = 10;
      this.apiService
        .getImages(value, this.tab == 0 ? "annotated" : "original")
        .subscribe((response) => {
          this.dataset = response.map(
            (r) =>
              new Response(
                r.name,
                this._sanitizer.bypassSecurityTrustResourceUrl(
                  "data:image/jpg;base64," + r.image
                )
              )
          );
          this.apiService.data[value] = this.dataset;
        });
    }, 100);
  }

  public onKSelect(value: string) {
    this.selectedkVal = Number(value);
  }

  public onImageSelect(value: string) {
    this.selectedImageName = value;
    this.selectedRectangleObj = null;
    this.selectedkVal = 10;
  }

  public onBoundingBoxCreation(rect: Rectangle) {
    this.selectedRectangleObj = rect;
  }

  public search() {
    let data = null;
    if (!!this.selectedImageName) {
      data = new RequestStructure(
        this.selectedModelName,
        this.selectedDataset,
        this.selectedImageName,
        this.selectedkVal,
        null
      );
    } else {
      if (!this.selectedRectangleObj) {
        data = new RequestStructure(
          this.selectedModelName,
          this.selectedDataset,
          null,
          this.selectedkVal,
          null
        );
      } else {
        const obj: any = {};
        if (
          this.selectedRectangleObj.w < 0 &&
          this.selectedRectangleObj.h < 0
        ) {
          let temp = this.selectedRectangleObj.w;
          this.selectedRectangleObj.w = this.selectedRectangleObj.startX;
          this.selectedRectangleObj.startX = this.selectedRectangleObj.w + temp;
          temp = this.selectedRectangleObj.h;
          this.selectedRectangleObj.h = this.selectedRectangleObj.startY;
          this.selectedRectangleObj.startY = this.selectedRectangleObj.h + temp;
          obj.x1 = this.selectedRectangleObj.startX;
          obj.y1 = this.selectedRectangleObj.startY;
          obj.x2 = this.selectedRectangleObj.w;
          obj.y2 = this.selectedRectangleObj.h;
        } else if (this.selectedRectangleObj.w < 0) {
          let temp = this.selectedRectangleObj.w;
          this.selectedRectangleObj.w = this.selectedRectangleObj.startX;
          this.selectedRectangleObj.startX = this.selectedRectangleObj.w + temp;
          temp = this.selectedRectangleObj.startY;
          obj.x1 = this.selectedRectangleObj.startX;
          obj.y1 = this.selectedRectangleObj.startY;
          obj.x2 = this.selectedRectangleObj.w;
          obj.y2 =
            this.selectedRectangleObj.startY + this.selectedRectangleObj.h;
        } else if (this.selectedRectangleObj.h < 0) {
          let temp = this.selectedRectangleObj.h;
          this.selectedRectangleObj.h = this.selectedRectangleObj.startY;
          this.selectedRectangleObj.startY = this.selectedRectangleObj.h + temp;
          temp = this.selectedRectangleObj.startX;
          obj.x1 = this.selectedRectangleObj.startX;
          obj.y1 = this.selectedRectangleObj.startY;
          obj.x2 =
            this.selectedRectangleObj.w + this.selectedRectangleObj.startX;
          obj.y2 = this.selectedRectangleObj.h;
        } else {
          obj.x1 = this.selectedRectangleObj.startX;
          obj.y1 = this.selectedRectangleObj.startY;
          obj.x2 =
            this.selectedRectangleObj.startX + this.selectedRectangleObj.w;
          obj.y2 =
            this.selectedRectangleObj.startY + this.selectedRectangleObj.h;
        }
        data = new RequestStructure(
          this.selectedModelName,
          this.selectedDataset,
          null,
          this.selectedkVal,
          obj
        );
      }
    }
    this.router.navigateByUrl("/confirm", { state: data });
  }

  ngOnInit() {}
}

export class RequestStructure {
  constructor(
    public modelName: string,
    public datasetName: string,
    public imgName: string,
    public k: number,
    public annotation: Annotation
  ) {}
}

export class Response {
  constructor(public name: string, public image: SafeResourceUrl) {}
}

export class Annotation {
  constructor(
    public x1: number,
    public y1: number,
    public x2: number,
    public y2: number
  ) {}
}
