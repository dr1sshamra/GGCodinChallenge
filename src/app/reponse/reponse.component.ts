import { Component, OnInit, NO_ERRORS_SCHEMA } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { Question } from '../services/question';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reponse',
  templateUrl: './reponse.component.html',
  styleUrls: ['./reponse.component.scss']
})
export class ReponseComponent implements OnInit {
  question: Question
  constructor(private questionService: QuestionService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let idQuestion = this.activatedRoute.snapshot.paramMap.get('id')
    this.getAnswer(+idQuestion)
  }

  getAnswer(id: number) {
    this.questionService.getQuestions().subscribe(res => {
      this.question = res.find(q => q.id == +id)
    },
      errors => {
        console.log('Oups ! something is wrong. [' + errors + ']')
      })
  }



}
