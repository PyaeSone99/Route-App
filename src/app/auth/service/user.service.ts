import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  register(user:User):Observable<User>{
    return this.http.post(
      "http://localhost:8080/admin/user/register",
      JSON.stringify(user),
      {
        headers : {
          'Content-Type' : 'application/json;charset=UTF-8'
        }
      })
  }
}
