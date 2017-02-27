import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Stack provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Stack {
  public questionsUrl = 'https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow';
  public usersUrl = 'https://api.stackexchange.com/2.2/users?order=desc&sort=reputation&site=stackoverflow';
  public ansUrl = 'https://api.stackexchange.com/2.2/questions';

  constructor(public http: Http) {
    console.log('Hello Stack Provider');
  }

  getAllQuestions(){
    return this.http.get(`${this.questionsUrl}`).map(res=>res.json());
  }

  getAllUsers(){
    return this.http.get(`${this.usersUrl}`).map(res=>res.json());
  }

  getQusAns(question_id:string){
    return this.http.get(`${this.ansUrl}/${question_id}/answers?order=desc&sort=activity&site=stackoverflow`).map(res=>res.json());
  }



}
