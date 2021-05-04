import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { DLComponent } from './dl/dl.component';

import { CommonModule } from '@angular/common';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { ButtonsSectionComponent } from './shared/buttons-section/buttons-section.component';
import { InputsSectionComponent } from './shared/inputs-section/inputs-section.component';
import { CrsSectionComponent } from './shared/crs-section/crs-section.component';
import { TabsSectionComponent } from './shared/tabs-section/tabs-section.component';
import { AlertsSectionComponent } from './shared/alerts-section/alerts-section.component';
import { NgbdModalComponent } from './shared/modal/modal.component';
import { NgbdModalContent } from './shared/modal/modal.component';
import { MLComponent } from './ml/ml.component';



@NgModule({
  declarations: [
    AppComponent,
    DLComponent,
    MLComponent,
    ProfileComponent,
    NavbarComponent,
    ButtonsSectionComponent,
    InputsSectionComponent,
    CrsSectionComponent,
    TabsSectionComponent,
    AlertsSectionComponent,
    NgbdModalComponent,
    NgbdModalContent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    NgbModule,
    RouterModule,
    NouisliderModule,
    JwBootstrapSwitchNg2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
