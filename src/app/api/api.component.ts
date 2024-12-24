import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'; // Import for reactive forms
import { ApiService } from '../api.service'; // Import the ApiService

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html', // Links the HTML file
  styleUrls: ['./api.component.css'] // Links the CSS file
})
export class APIComponent {
  data: any[] = []; // Array to hold fetched data
  userInputForm: FormGroup; // FormGroup for reactive form handling

  constructor(private apiService: ApiService) {
    // Initialize the form with default value
    this.userInputForm = new FormGroup({
      userInput: new FormControl(5) // Default value set to 5
    });
  }

  // Fetch data based on user input
  updateDataCount() {
    const userInputValue = this.userInputForm.value.userInput; // Get input value
    if (userInputValue >= 1 && userInputValue <= 50) {
      this.getData(userInputValue); // Fetch data if input is valid
    } else {
      alert('Please enter a number between 1 and 50.');
    }
  }

  // Calls the ApiService to fetch data
  getData(limit: number) {
    this.apiService.getData(limit).subscribe(
      (data) => {
        this.data = data; // Assign fetched data to the data array
      },
      (error) => {
        console.error('Error fetching data:', error); // Log errors to the console
      }
    );
  }
}
