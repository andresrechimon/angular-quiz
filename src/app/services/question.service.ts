import { Injectable } from '@angular/core';
import { Answer } from '../Models/Answer';
import { Question } from '../Models/Question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  indexQuestion:number = 0;
  indexAnswer:number = 0;
  selectedOption!:Answer | null;
  disableBtn:boolean = true;
  questionAnswered:boolean = false;
  answerUser: Array<number> = [];

  public question:Question[] = [
    new Question('Angular fue desarrollado por...', [
      new Answer('Javascript', 0),
      new Answer('Facebook', 0),
      new Answer('Google', 1),
      new Answer('Apple', 0),
    ]),
    new Question('¿Qué es AOT?', [
      new Answer('Ahead-Of-Time Compilation', 1),
      new Answer('Ahead-Of-Time Template', 0),
      new Answer('Ambas', 0),
      new Answer('Ninguna', 0),
    ]),
    new Question('¿Cuál de los siguientes no refiere a un ciclo de vida en Angular?', [
      new Answer('ngOnChanges', 0),
      new Answer('ngViewStart', 1),
      new Answer('ngOnInit', 0),
      new Answer('Ninguna', 0),
    ]),
    new Question('Sobre Typescript...', [
      new Answer('Angular se cimenta sobre Typescript', 0),
      new Answer('Es un superset de Javascript', 0),
      new Answer('Es mantenido por Microsoft', 0),
      new Answer('Todas', 1),
    ]),
    new Question('Router es parte del siguiente módulo:', [
      new Answer('@angular/common', 0),
      new Answer('@angular/core', 0),
      new Answer('@angular/router', 1),
      new Answer('Todas', 0),
    ]),
    new Question('¿Cómo interpolamos en Angular?', [
      new Answer('{{}}', 1),
      new Answer('{}', 0),
      new Answer('{{{}}}', 0),
      new Answer('Ninguna', 0),
    ]),
    new Question('¿Cuál se usa para convertir el input a mayúsculas?', [
      new Answer('| titlecase', 0),
      new Answer('| toUpper', 0),
      new Answer('| upper', 0),
      new Answer('| uppercase', 1),
    ]),
    new Question('¿Cuál de las siguientes no es una característica de Angular 2?', [
      new Answer('Component', 0),
      new Answer('MultiThread', 1),
      new Answer('Typescript', 0),
      new Answer('Services', 0),
    ]),
    new Question('Los Observables nos ayudan con el manejo de información...', [
      new Answer('Síncrona', 0),
      new Answer('Asíncrona', 1),
      new Answer('Ambas', 0),
      new Answer('Ninguna', 0),
    ]),
    new Question('¿Dónde se encontraría probablemente el siguiente código en una aplicación Angular? routerLink="/home"', [
      new Answer('Servicios', 0),
      new Answer('Metadata del componente', 0),
      new Answer('Routing', 0),
      new Answer('Template', 1),
    ]),
  ]

  constructor() { }

  getQuestions() {
    return this.question.slice();
  }
}
