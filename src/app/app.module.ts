import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { TitleSubtitleComponent } from './components/template/title-subtitle/title-subtitle.component';
import { SliderComponent } from './components/template/slider/slider.component';
import { AboutUsComponent } from './components/template/about-us/about-us.component';
import { CardsComponent } from './components/template/cards/cards.component';
import { AssesmentsComponent } from './components/template/assesments/assesments.component';
import { CallToActionComponent } from './components/template/call-to-action/call-to-action.component';
import {MatCardModule} from '@angular/material/card';
import { FooterComponent } from './components/template/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TitleSubtitleComponent,
    SliderComponent,
    AboutUsComponent,
    CardsComponent,
    CardsComponent,
    AssesmentsComponent,
    CallToActionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
