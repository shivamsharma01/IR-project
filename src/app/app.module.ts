import { MessageService } from 'primeng/api';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { JwBootstrapSwitchNg2Module } from "jw-bootstrap-switch-ng2";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routing";
import { CommonModule } from "@angular/common";
import { NouisliderModule } from "ng2-nouislider";

import { TabViewModule } from "primeng/tabview";
import { ToastModule } from "primeng/toast";
import { DialogModule } from "primeng/dialog";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { SliderModule } from "primeng/slider";
import { CarouselModule } from "primeng/carousel";
import { AccordionModule } from "primeng/accordion";
import { ButtonModule } from "primeng/button";
import {PaginatorModule} from 'primeng/paginator';

import { AppComponent } from "./app.component";
import { ProfileComponent } from "./profile/profile.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { TabsSectionComponent } from "./tabs-section/tabs-section.component";
import { MainComponent } from "./main/main.component";
import { DatasetSelectorComponent } from "./dataset-selector/dataset-selector.component";
import { QuerySelectorComponent } from "./query-selector/query-selector.component";
import { TopKSelectorComponent } from "./top-k-selector/top-k-selector.component";
import { SpinnerComponent } from "./spinner/spinner.component";
import { MlDescriptionComponent } from "./ml-description/ml-description.component";
import { FileUploadComponent } from "./file-upload/file-upload.component";
import { ConfirmSendComponent } from './confirm-send/confirm-send.component';
import { ModelSelectorComponent } from './model-selector/model-selector.component';
import { QueryImagesComponent } from './query-images/query-images.component';

@NgModule({
  declarations: [
    MainComponent,
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    TabsSectionComponent,
    DatasetSelectorComponent,
    QuerySelectorComponent,
    TopKSelectorComponent,
    SpinnerComponent,
    MlDescriptionComponent,
    FileUploadComponent,
    ConfirmSendComponent,
    ModelSelectorComponent,
    QueryImagesComponent,
  ],
  imports: [
    NgbModule,
    ToastModule,
    FormsModule,
    FormsModule,
    RouterModule,
    CommonModule,
    RouterModule,
    SliderModule,
    DialogModule,
    ButtonModule,
    TabViewModule,
    BrowserModule,
    CarouselModule,
    PaginatorModule,
    AccordionModule,
    AppRoutingModule,
    NouisliderModule,
    HttpClientModule,
    ProgressSpinnerModule,
    BrowserAnimationsModule,
    JwBootstrapSwitchNg2Module,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
