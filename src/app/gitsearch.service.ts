import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {environment,} from '../environments/environment';

import { Repository } from './repository';
import { promise } from 'protractor';
import { resolve } from 'dns';
import { reject } from 'q';
import { from } from 'rxjs';
import { User } from './user'

@Injectable({
  providedIn: 'root'
})
export class GitsearchService {

  user:User;
  repo:Repository;

  constructor(public http:HttpClient) { 
    this.user = new User('','','','',0,0);
    this.repo = new Repository('','','','');
  }
  
  searchUsers(term:string){
    
    interface ApiRes {
      login:any,
       avatar_url:any,
       html_url:any,
       name:any,
       followers:any,
       following:any,
    }
    let headers = new HttpHeaders ({'Authorization':'token'}) 
    let option={headers:headers}
    let searchP = 'https://api.github.com/users/' + term + '?access_token=' + environment.apiKey;

    let promise = new Promise((resolve, reject) => {

      this.http.get<ApiRes>(searchP).toPromise().then(
        (data) => {
          this.user = data;
          resolve(data);
        },
        (error) => {
          
          reject();
        }
      );
    });
    return promise;
  }

  searchrepo(term:string){
    
    interface ApiRes {
      name:any,
       description:any,
       created_at:any,
       html_url:any,
    }
    let headers = new HttpHeaders ({'Authorization':'token 5800a15060c7c80189b999dcca739381f37e1ecd'}) 
    let option={headers:headers}
    let searchP = 'https://api.github.com/users/' + term + '/repos?access_token=' + environment.apiKey;

    let promise = new Promise((resolve, reject) => {

      this.http.get<ApiRes>(searchP).toPromise().then(
        (data) => {
          this.repo = data;
          resolve(data);
        },
        (error) => {
          
          reject();
        }
      );
    });
    return promise;
  }

}
