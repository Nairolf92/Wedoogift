import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CardModel} from "../models/card.model";

@Component({
  selector: 'app-result-cards',
  templateUrl: './result-cards.component.html',
  styleUrls: ['./result-cards.component.css']
})
export class ResultCardsComponent {

  @Input() amount: number = 0;
  @Input() isResult: boolean = false
  @Input() isEqual: boolean = false
  @Input() cardResult: CardModel = {};
  @Output() changeAmountEvent = new EventEmitter<number>();

  public changeAmount(amount: number) {
    this.changeAmountEvent.emit(amount);
  }
}
