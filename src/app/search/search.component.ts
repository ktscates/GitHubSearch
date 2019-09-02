import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  name: string;

  search(users){
    this.name = users;
    console.log(this.name);
    this.router.navigate(['/search-display', this.name]);
  }
  

  constructor(private router: Router) { }

  ngOnInit() {
   
  }

}
