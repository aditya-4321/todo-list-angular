import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  private _listOfUsers: User[] = [];

  signUp(name: string, password: string): Observable<User> {
    this._listOfUsers.push({ id: '12',name: name, password: password})
    return of(this._listOfUsers[this._listOfUsers.length-1]);
  }

  login(name: string, password: string) {
    let index = this._listOfUsers.findIndex(user => user.name === name);
    if(index > -1){
      return of(this._listOfUsers[index]);
    } else {
      return of(null)
    }
    
  }
}
