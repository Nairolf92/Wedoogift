import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {WedoofigiftAPIService} from "../wedoofigift-api.service";
import {Observable, Subject, takeUntil} from "rxjs";
import {CardModel} from "../models/card.model";

@Component({
  selector: 'app-gift-form',
  templateUrl: './gift-form.component.html',
  styleUrls: ['./gift-form.component.css']
})
export class GiftFormComponent implements OnInit {

  public isResult: boolean = false;
  public isEqual: boolean = false;
  public amount: number = 0;
  public cardResult: CardModel = {};
  public profileForm: FormGroup = new FormGroup({
    amount: new FormControl('')
  });
  public destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private wedoogiftAPIService: WedoofigiftAPIService) {
  }

  ngOnInit(): void {
    // For easier tests, complete and submit the field when the page is loaded
    this.profileForm.setValue({'amount' : 2});
    this.onSubmit();
  }

  onSubmit(amountFromClick?: number) : void{
    this.isEqual = false;
    if(amountFromClick!! > 0) {
      this.profileForm.get('amount')?.setValue(amountFromClick);
    }
    this.amount = this.profileForm.get('amount')?.value;
    if (this.amount!! > 0 ){
      this._getCards(this.amount);
    }

  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

  public increaseAmount() {
    if (this.amount!! >= 0 ){
      this.profileForm.get('amount')?.setValue(this.amount+10);
      this._getCards(this.amount);
    }
  }

  public decreaseAmount() {
    if (this.amount!! > 0 ){
      this.profileForm.get('amount')?.setValue(this.amount-10);
      this._getCards(this.amount);
    }
  }

  private _getCards(amount: number){
    this.wedoogiftAPIService.getCards(amount).pipe(
      takeUntil(this.destroy$)).subscribe((data)=>{
      this.cardResult = data;
      if(this.cardResult.equal) {
        this.isEqual = true;
      }
      this.isResult = true;
    })
  }
}
