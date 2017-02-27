import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {QusDetailPage} from "../qus-detail/qus-detail";
import {Stack} from "../../../../providers/stack";

/*
  Generated class for the Question page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-question',
  templateUrl: 'question.html'
})
export class QuestionPage {

  public qus:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public stack:Stack) {
    this.AllQuestions();
  }

  AllQuestions(){
    this.stack.getAllQuestions()
      .subscribe(
        res=>{
          this.qus = res.items;
          console.log(this.qus);
        })
  }

  QusDetails(question_id:string){
    this.navCtrl.push(QusDetailPage, {question_id});
  }

  ionViewDidLoad() {
    console.log('Quiestions Page');
  }


}
