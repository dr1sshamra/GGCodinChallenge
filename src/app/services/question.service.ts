import { Injectable } from '@angular/core';
import { Question } from './question';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  fakeBackend = '../../assets/data.json'

  questionAnswered : number[] = []
  questionAnswered$ : Observable<number[]>
  questionAnsweredSubject = new Subject<number[]>()

  constructor(private http: HttpClient) {
    this.questionAnswered$ = this.questionAnsweredSubject.asObservable()
   }

  getQuestions():Observable<Question[]>{
    return this.http.get<Question[]>(this.fakeBackend)
  }

  AddToAnsweredQuestions(idQuestion:number) {
    this.questionAnswered?.push(idQuestion)
    this.questionAnsweredSubject.next(this.questionAnswered)
  }

  isAllAnswered(questionsCount:number) : boolean{
    console.log(this.questionAnswered.length)
    if (this.questionAnswered?.length === questionsCount -1){
      return true
    }
    return false
  }
}
