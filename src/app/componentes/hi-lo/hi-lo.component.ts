import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../Services/http.service';
import { HighLowService } from '../../Services/high-low.service';
import { CardsEnum } from '../../clases/cards-enum';
import { timer } from 'rxjs';
import { subscribeOn } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hi-lo',
  templateUrl: './hi-lo.component.html',
  styleUrls: ['./hi-lo.component.css']
})
export class HiLoComponent implements OnInit {
  private deckId: number;
  public backCard = '../../../assets/imagenes/card-back.png';
  public currentCard = {img: this.backCard, value: -1};
  public previousCard = {img: this.backCard, value: -1};
  public cardChosen = false;
  public currentToPrevious = false;
  public remainingTime;
  public hiloButtonsEnabled = false;
  public playing = false;
  public puntuacion = 0;
  public turns = 0;
  public fail = false;
  public success = false;
  public exitResult = false;
  public hideCurrent = false;
  public gameFinished = false;
  public destroyComponent = false;
  public storageEmpty = true;
  constructor(private hiloService: HighLowService, private router: Router) { }

  ngOnInit() {
    this.hiloService.shuffleDeck().subscribe((response) => {
    this.deckId = response.deck_id;
    });
    this.storageEmpty = (localStorage.getItem('hi-lo-score') === null);
  }

  drawCard(obj: any) {
    this.hiloService.drawCard(this.deckId).subscribe((response) => {
      obj.img = response.cards[0].image;
      if(isNaN(parseInt(response.cards[0].value, 10))) {
        console.log(response.cards[0].value, CardsEnum[`${response.cards[0].value}`]);
        obj.value = CardsEnum[`${response.cards[0].value}`];
      } else {
        obj.value = parseInt(response.cards[0].value, 10);
      }
      console.log(obj);
    });
  }

  jugar() {
    this.playing = true;
    this.currentToPrevious = true;
    this.drawCard(this.previousCard);
    this.hiloButtonsEnabled = true;
    timer(1000).subscribe(() => {this.currentToPrevious = false;});
  }

  decideCard(hilo: string) {
    this.hiloButtonsEnabled = false;
    this.turns += 1;
    this.drawCard(this.currentCard);
    this.cardChosen = true;
    timer(3000).subscribe(() => {
      this.cardChosen = false;
      console.log(this.previousCard.value, this.currentCard.value, this.currentCard.value > this.previousCard.value);
      switch (hilo) {
        case 'higher':
          if (this.currentCard.value > this.previousCard.value) {
            this.successResult();
          }
          else {
            this.failureResult();
          }
          break;
        case 'lower':
          if (this.currentCard.value < this.previousCard.value) {
            this.successResult();
          }
          else {
            this.failureResult();
          }
          break;
      }
      if (this.turns === 10) {
        this.saveScore();
        this.gameFinished = true;
        timer(1000).subscribe(() => {
          this.destroyComponent = true;
        })
      }
      this.hiloButtonsEnabled = true;
    });
  }
  
  saveScore() 
  {
    if(localStorage.getItem('hi-lo-score') === null)
    {
      localStorage.setItem('hi-lo-score', JSON.stringify([{
        usuario: JSON.parse(localStorage.getItem('uname')),
        fecha: Date(),
        puntuacion: `${this.puntuacion}/10`
      }]));
    }
    else
    {
      let existingArray = JSON.parse(localStorage.getItem('hi-lo-score'));
      console.log(existingArray);
      existingArray.push({
        usuario: JSON.parse(localStorage.getItem('uname')),
        fecha: Date(),
        puntuacion: `${this.puntuacion}/10`
      });
      console.log(existingArray);
      localStorage.removeItem('hi-lo-score');
      localStorage.setItem('hi-lo-score', JSON.stringify(existingArray));
    }
  }

  failureResult() {
    this.fail = true;
    timer(3000).subscribe(() => {
      this.exitResult = true;
      this.swapCards();
    });
    timer(4000).subscribe(() => {
      this.exitResult = false;
      this.fail = false;
    });
  }

  successResult() {
    this.puntuacion += 1;
    this.success = true;
    timer(3000).subscribe(() => {
      this.exitResult = true;
      this.swapCards();
    });
    timer(4000).subscribe(() => {
      this.exitResult = false;
      this.success = false;
    });
  }

  swapCards() {
    this.hideCurrent = true;
    this.currentToPrevious = true;
    this.previousCard.img = this.currentCard.img;
    this.previousCard.value = this.currentCard.value;
    this.currentCard.img = this.backCard;
    timer(1000).subscribe(() => {
      this.hideCurrent = false;
      this.cardChosen = true;
    });
    timer(5000).subscribe(() => {
      this.cardChosen = false;
      this.currentToPrevious = false;
    })
  }

  again() {
    window.location.reload();
  }

  principal() {
    this.router.navigate(['/Principal']);
  }
}
