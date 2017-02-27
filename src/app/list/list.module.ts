import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {UsersPage} from "./pages/users/users";
import {QuestionPage} from "./pages/question/question";
import {ListComponent} from "./list";
import {QusDetailPage} from "./pages/qus-detail/qus-detail";
import {HomePage} from "./pages/home/home";
import {Stack} from "../../providers/stack";
@NgModule({
  declarations: [
    HomePage,
    QuestionPage,
    QusDetailPage,
    UsersPage,
    ListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(HomePage),
    IonicModule.forRoot(QuestionPage),
    IonicModule.forRoot(QusDetailPage),
    IonicModule.forRoot(UsersPage),
  ],
  entryComponents: [
    HomePage,
    QuestionPage,
    QusDetailPage,
    UsersPage,
    ListComponent
  ],
  providers: [Stack]
})
export class ListModule {}
