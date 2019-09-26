import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class HighLowService {

  private url = 'https://deckofcardsapi.com/api/deck/';
  constructor(private http: HttpService) { }

  shuffleDeck() {
    const SHUFFLE_ENDPOINT = `${this.url}new/shuffle/?deck_count=1`;
    return this.http.get(SHUFFLE_ENDPOINT).pipe(response => response);
  }

  drawCard(deckId: number) {
    const DRAW_ENDPOINT = `${this.url}${deckId}/draw/?count=1`;
    return this.http.get(DRAW_ENDPOINT).pipe(response => response);
  }
}
