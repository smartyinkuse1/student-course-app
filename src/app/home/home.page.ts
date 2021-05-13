import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  data;
  constructor(private homeService: HomeService) {}
  ngOnInit(){
    this.homeService.getStudentsCourses().subscribe((res:any)=> {
      this.data = res.data
    })
  }
}
