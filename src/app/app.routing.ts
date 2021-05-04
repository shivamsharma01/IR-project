import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { MLComponent } from './ml/ml.component';
import { ProfileComponent } from './profile/profile.component';
import { DLComponent } from './dl/dl.component';

const routes: Routes =[
    { path: 'ml',             component: MLComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'dl',          component: DLComponent },
    { path: '', redirectTo: 'dl', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
