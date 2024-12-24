import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient for HTTP requests
import { Observable } from 'rxjs'; // Import Observable for API response

@Injectable({
  providedIn: 'root' // Marks this service as available throughout the app
})
export class ApiService {
  constructor(private http: HttpClient) {}

  // Method to fetch data from the API
  getData(limit: number): Observable<any[]> {
    const apiUrl = `https://fakestoreapi.com/products?limit=${limit}`; // Construct the API URL
    return this.http.get<any[]>(apiUrl); // Make GET request and return the Observable
  }
}
