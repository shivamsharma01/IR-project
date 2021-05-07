import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routing";

import { DialogModule } from "primeng/dialog";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { SliderModule } from "primeng/slider";
import { CarouselModule } from "primeng/carousel";
import { AccordionModule } from "primeng/accordion";
import { ButtonModule } from "primeng/button";

import { AppComponent } from "./app.component";
import { ProfileComponent } from "./profile/profile.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";

import { DLComponent } from "./dl/dl.component";

import { CommonModule } from "@angular/common";
import { NouisliderModule } from "ng2-nouislider";
import { JwBootstrapSwitchNg2Module } from "jw-bootstrap-switch-ng2";
import { ButtonsSectionComponent } from "./shared/buttons-section/buttons-section.component";
import { TabsSectionComponent } from "./shared/tabs-section/tabs-section.component";
import { NgbdModalComponent } from "./shared/modal/modal.component";
import { NgbdModalContent } from "./shared/modal/modal.component";
import { MLComponent } from "./ml/ml.component";

@NgModule({
  declarations: [
    DLComponent,
    MLComponent,
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    NgbdModalContent,
    NgbdModalComponent,
    TabsSectionComponent,
    ButtonsSectionComponent,
  ],
  imports: [
    NgbModule,
    FormsModule,
    FormsModule,
    RouterModule,
    CommonModule,
    RouterModule,
    SliderModule,
    DialogModule,
    ButtonModule,
    BrowserModule,
    CarouselModule,
    AccordionModule,
    AppRoutingModule,
    NouisliderModule,
    HttpClientModule,
    ProgressSpinnerModule,
    BrowserAnimationsModule,
    JwBootstrapSwitchNg2Module,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
