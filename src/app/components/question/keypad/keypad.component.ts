import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})
export class KeypadComponent implements OnInit {
  btnString:string = 'Confirmar';

  constructor(public qs:QuestionService, private router:Router) { }

  ngOnInit(): void {
  }

  next(){
    switch (this.btnString) {
      case 'Confirmar': {
        this.qs.questionAnswered = true;
        this.btnString = 'Siguiente'
        if(this.qs.question.length - 1 === this.qs.indexQuestion){
          this.btnString = 'Ver Resultados'
        }
      }     
        break;
      case 'Siguiente': {
        this.qs.indexQuestion++;
        this.qs.answerUser.push(this.qs.indexAnswer);
        this.qs.disableBtn = true;
        this.qs.questionAnswered = false;
        this.btnString = 'Confirmar'
      }     
        break;
      case 'Ver Resultados': {
        this.qs.answerUser.push(this.qs.indexAnswer);
        this.qs.selectedOption = null;
        this.qs.questionAnswered = false;
        this.qs.indexQuestion = 0;
        this.router.navigate(['/answer']);
      }     
        break;
    
      default:
        break;
    }
  }
}
