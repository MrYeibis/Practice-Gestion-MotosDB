import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  landingPageActive:Boolean = false;
  constructor(private location: Location) {}

  ngOnInit(): void {
    this.currentRoute();
  }

  currentRoute(){
    setTimeout(() => {
      if(this.location.path()=="/landing" || "/register" || "/login"){
        this.landingPageActive = false;
      } else {
        this.landingPageActive = true;
      }
    },50);
    
  }
}
