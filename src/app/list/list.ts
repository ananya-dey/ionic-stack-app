import {Component, ViewChild} from '@angular/core';
import {StatusBar, Splashscreen} from "ionic-native";
import {HomePage} from "./pages/home/home";
import {QuestionPage} from "./pages/question/question";
import {UsersPage} from "./pages/users/users";
import {Platform, MenuController, Nav} from "ionic-angular";

/*
  Generated class for the List component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'list',
  templateUrl: 'list.html'
})
export class ListComponent {

  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
  pages: Array<{title:string, component:any}>;

  constructor(public platform: Platform, public mctrl:MenuController) {
    this.initApp();
    this.pages = [
      {title: 'Home', component: HomePage},
      {title: 'Questions', component: QuestionPage},
      {title: 'Users', component: UsersPage}
    ];
  }

  initApp(){
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(p){
    this.mctrl.close();
    this.nav.setRoot(p.component);
  }


}
