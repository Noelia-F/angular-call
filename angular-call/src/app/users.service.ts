import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersUrl = 'https://api.github.com/users/Noelia-F';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<object> {
    return this.http.get<object>(this.usersUrl);
  }
}
