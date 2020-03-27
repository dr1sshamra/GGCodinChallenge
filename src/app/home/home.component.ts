import { Component, OnInit, NgZone } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { Subject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  questionsCount : number
  questionRemaining : number 

  optionsClosed: AnimationOptions = {
    path: '../../assets/lottie/closed-gift.json',
  };

  optionsOpened: AnimationOptions = {
    path: '../../assets/lottie/opened-gift.json',
    loop: false
  };

  openedVisibility: boolean = false;
  closedVisibility: boolean = true;


  constructor(private router: Router,
    private ngZone: NgZone,
    private questionService: QuestionService) {

  }

  ngOnInit(): void {
    this.questionService.getQuestions().subscribe(res => {
      this.questionsCount = res.length
      this.questionRemaining = this.questionsCount - this.questionService.questionAnswered.length
    },
      errors => {
        console.log('Oups ! something is wrong. [' + errors + ']')
      })
  }
  

  closedClicked() {
    this.toggleBoxes(false)
  }

  openedComplete() {
    
    if (this.questionService.isAllAnswered(this.questionsCount)) {
      this.navigate(['reponse', this.questionsCount ])
    } else {
      let randomQuestion = Math.floor(Math.random() * this.questionsCount -1 ) + 1
      while(this.AlreadyAnswered(randomQuestion) || randomQuestion === 0){
        randomQuestion = Math.floor(Math.random() * this.questionsCount -1 ) + 1
      }
      this.questionService.AddToAnsweredQuestions(randomQuestion)
      this.navigate(['reponse', randomQuestion])
    }

  }

  toggleBoxes(val) {
    this.closedVisibility = val
    this.openedVisibility = !val
  }

  public navigate(commands: any[]): void {
    this.ngZone.run(() => this.router.navigate(commands)).then();
  }

  AlreadyAnswered(id: number): boolean {
    let question = this.questionService.questionAnswered.find(q => q == id)
    if (question == null) {
      return false
    }
    return true
  }

}
