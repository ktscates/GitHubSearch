import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class SearchRequestService {

  users: User;
  key:"e7902aff701fd8081230d54ea4752ff2eb70ca3a";

  constructor(private http:HttpClient) { 
    this.users = new User("",0);
  }
  userRequest(userName){
    interface ApiResponse{
      login:string;
      public_repos:number;
    }

    const promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>('https://api.github.com/users/' + userName + '?access_token=' + this.key).toPromise().then(response=>{
        console.log(this.users)
        this.users.login = response.login
        this.users.public_repos = response.public_repos

        resolve();
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
