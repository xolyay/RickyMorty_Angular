import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesRoutingModule } from './episodes-routing.module';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    EpisodesComponent
  ],
  imports: [
    CommonModule,
    EpisodesRoutingModule
  ]
})
export class EpisodesModule { }
