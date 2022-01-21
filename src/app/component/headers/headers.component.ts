import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {

  constructor(private router: Router) { }
  gotoHome(){
    console.log("Inside ts folder")
    this.router.navigate(['/products']);  // define your component where you want to go
}
  ngOnInit(): void {
  }

}
