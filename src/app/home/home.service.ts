import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  api = environment.api + "index/"
  constructor(private http: HttpClient) { }
  getStudentsCourses() {
    return this.http.get(`${this.api}`)
  }
}
