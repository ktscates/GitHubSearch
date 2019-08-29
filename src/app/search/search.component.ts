import { Component, OnInit } from '@angular/core';
import { SearchRequestService } from '../search-http/search-request.service';
import { User } from '../user';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  user: User;
  

  constructor(private searchService:SearchRequestService) { }

  ngOnInit() {
    this.searchService.userRequest("")
    this.user = this.searchService.user

  }

}
