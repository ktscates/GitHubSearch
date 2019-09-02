import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SearchRequestService } from '../search-http/search-request.service';
import { User } from '../user';

@Component({
  selector: 'app-search-display',
  templateUrl: './search-display.component.html',
  styleUrls: ['./search-display.component.css']
})
export class SearchDisplayComponent implements OnInit {

  displayUser: User;

  constructor(private route: ActivatedRoute, private service: SearchRequestService) { }

  ngOnInit() {
    let userName = this.route.snapshot.paramMap.get('userName');
    this.service.userRequest(userName);
    this.displayUser = this.service.users;
    // console.log(this.displayUser);
    // console.log()
  }

}
