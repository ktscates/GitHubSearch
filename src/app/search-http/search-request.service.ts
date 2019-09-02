import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class SearchRequestService {

  users: User;

  constructor(private http:HttpClient) { 
    this.users = new User("",0);
  }
  userRequest(id){
    interface ApiResponse{
      login:string;
      public_repos:number;
    }

    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>("https://api.github.com/userss/"+id+"?access_token="+environment.key).toPromise().then(response=>{
        this.users.login = response.login
        this.users.public_repos = response.public_repos

        resolve(id);
      },
      error=>{
        this.users.login = "not found"
        this.users.public_repos = 0

        reject(error)
      })
    })
    return promise
  }
}
