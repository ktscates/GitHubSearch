import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class SearchRequestService {

  user: User;

  constructor(private http:HttpClient) { 
    this.user = new User("",0);
  }
  userRequest(id){
    interface ApiResponse{
      login:string;
      public_repos:number;
    }

    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>("https://api.github.com/users/"+id+"?access_token="+environment.key).toPromise().then(response=>{
        this.user.login = response.login
        this.user.public_repos = response.public_repos

        resolve()
      })
    })
    return promise
  }
}
