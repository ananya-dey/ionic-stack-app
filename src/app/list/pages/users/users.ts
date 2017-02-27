import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Stack} from "../../../../providers/stack";

/*
  Generated class for the Users page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {
public user:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public stack:Stack) {
    this.AllUsers();
  }

  AllUsers(){
    this.stack.getAllQuestions()
      .subscribe(
        res=>{
          this.user = res.items;
          console.log(this.user);
        })
  }
  ionViewDidLoad() {
    console.log('Users Page');
  }


}
