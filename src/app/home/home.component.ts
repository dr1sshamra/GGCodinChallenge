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
  }

  closedClicked() {
    this.toggleBoxes(false)
  }

  openedComplete() {

    if (this.questionService.isAllAnswered()) {
      this.navigate(['reponse', 5])
    } else {
      let randomQuestion = Math.floor(Math.random() * 4) + 1
      while(this.AlreadyAnswered(randomQuestion)){
        randomQuestion = Math.floor(Math.random() * 4) + 1
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
