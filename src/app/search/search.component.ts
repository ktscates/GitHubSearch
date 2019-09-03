import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  goToUrl(userName){
    this.router.navigate(['/search-display', userName]);
  }
  

  constructor(private router: Router) { }

  ngOnInit() {
   
  }

}
