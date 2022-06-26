import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Answer } from 'src/app/Models/Answer';
import { Question } from 'src/app/Models/Question';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  listQuestion:Question[] = [];
  answersUser!:any[];

  constructor(private qs:QuestionService, private router:Router) { }

  ngOnInit(): void {
    this.listQuestion = this.qs.question;
    this.answersUser = this.qs.answerUser;
  }

  back(){
    this.qs.answerUser = [];
    this.router.navigate(['/']);
  }

  addClassOption(answer:Answer, i:number, j:number){
    if(answer.isCorrect == 1 && this.answersUser[i] == j){
     return 'list-group-item-success'
    }else if(answer.isCorrect == 0 && this.answersUser[i] == j){
      return 'list-group-item-danger'
    }else{
      return;
    }
  }
}
