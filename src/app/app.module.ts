import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FlaskComponent } from './flask/flask.component';
import { DjangoComponent } from './django/django.component';
import { APIComponent } from './api/api.component';
import { NotFoundComponent } from './not-found/not-found.component';

// NgModule is a decorator:

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FlaskComponent,
    DjangoComponent,
    APIComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Custom imported list here:-
    
  ],
  providers: [], // add providers list here
  bootstrap: [AppComponent]
})
export class AppModule { }
