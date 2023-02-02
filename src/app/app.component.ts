import { HttpClient } from '@angular/common/http';
import { Component, Injectable, NgModule, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


import { map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent implements OnInit {
  posts:any;
  constructor(
 
  ){}
  ngOnInit(): void {

  }
 

}


