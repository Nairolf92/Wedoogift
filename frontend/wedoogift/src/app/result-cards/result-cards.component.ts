import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CardModel} from "../models/card.model";

@Component({
  selector: 'app-result-cards',
  templateUrl: './result-cards.component.html',
  styleUrls: ['./result-cards.component.css']
})
export class ResultCardsComponent implements OnInit {

  @Input() amount: number = 0;
  @Input() isResult: boolean = false
  @Input() isEqual: boolean = false
  @Input() cardResult: CardModel = {};
  @Output() changeAmountEvent = new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {
  }

  public changeAmount(amount: number) {
    this.changeAmountEvent.emit(amount);
  }

}
