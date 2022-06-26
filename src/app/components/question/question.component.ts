import { Component, OnInit } from '@angular/core';
import { Answer } from 'src/app/Models/Answer';
import { Question } from 'src/app/Models/Question';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  listQuestions:Question[] = [];

  constructor(public qs:QuestionService) { }

  ngOnInit(): void {
    this.listQuestions = this.qs.getQuestions()
  }

  obtainQuestion(){
    return this.listQuestions[this.qs.indexQuestion].description
  }

  answerSelected(answer:Answer, i:number){
    if(this.qs.questionAnswered === true){
      return
    }
    this.qs.selectedOption = answer;
    this.qs.disableBtn = false;
    this.qs.indexAnswer = i;
  }

  addClassOption(answer:Answer){
    if(answer === this.qs.selectedOption && !this.qs.questionAnswered){
      return 'active text-light'
    }else if(answer === this.qs.selectedOption && this.qs.questionAnswered && this.qs.selectedOption.isCorrect === 1){
      return 'list-group-item-success'
    }else if(answer === this.qs.selectedOption && this.qs.questionAnswered && this.qs.selectedOption.isCorrect === 0){
      return 'list-group-item-danger'
    }else{
      return;
    }
  }

  iconCorrect(answer:Answer){
    if(answer === this.qs.selectedOption && this.qs.questionAnswered && this.qs.selectedOption.isCorrect === 1){
      return true
    } else{
      return;
    }
  }

  iconIncorrect(answer:Answer){
    if(answer === this.qs.selectedOption && this.qs.questionAnswered && this.qs.selectedOption.isCorrect === 0){
      return true
    } else{
      return;
    }
  }
}
