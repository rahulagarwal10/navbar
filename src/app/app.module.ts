import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NavitemComponent } from './nav/navitem/navitem.component';
import { DescriptionComponent } from './nav/description/description.component';
import { ChangecolorDirective } from './changecolor.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NavitemComponent,
    DescriptionComponent,
    ChangecolorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
