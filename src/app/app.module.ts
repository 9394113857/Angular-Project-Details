import { NgModule } from '@angular/core'; // Core Angular module decorator
import { BrowserModule } from '@angular/platform-browser'; // Provides services for browser-specific functionality

// Import for routing between components
import { AppRoutingModule } from './app-routing.module'; 

// Import for handling HTTP requests
import { HttpClientModule } from '@angular/common/http'; 

// Import for building reactive forms
import { ReactiveFormsModule } from '@angular/forms'; 

// Component imports
import { AppComponent } from './app.component'; // Main application component
import { HomeComponent } from './home/home.component'; // Home component
import { FlaskComponent } from './flask/flask.component'; // Flask-related component
import { DjangoComponent } from './django/django.component'; // Django-related component
import { APIComponent } from './api/api.component'; // API component for fetching and displaying data
import { NotFoundComponent } from './not-found/not-found.component'; // 404 error page component

@NgModule({
  // Declare all components used in this module
  declarations: [
    AppComponent,        // Main application component
    HomeComponent,       // Home page
    FlaskComponent,      // Flask-related functionality
    DjangoComponent,     // Django-related functionality
    APIComponent,        // API integration functionality
    NotFoundComponent    // 404 error handling
  ],
  // Specify imported modules
  imports: [
    BrowserModule,       // Required for all Angular web applications
    AppRoutingModule,    // Application routing module for navigation
    HttpClientModule,    // Enables HTTP communication
    ReactiveFormsModule  // Enables reactive form handling
  ],
  // Specify providers for services (empty if no global services)
  providers: [],
  // Set the root component for the application
  bootstrap: [AppComponent]
})
export class AppModule { }
