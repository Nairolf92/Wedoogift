import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {WedoofigiftAPIService} from "../wedoofigift-api.service";
import {Subject, takeUntil} from "rxjs";
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
  products = [];
  destroy$: Subject<boolean> = new Subject<boolean>();


  constructor(private wedoogiftAPIService: WedoofigiftAPIService) {
  }

  profileForm = new FormGroup({
    amount: new FormControl('')
  });

  ngOnInit(): void {
  }

  onSubmit(amountFromClick?: number) {
    if(amountFromClick!! > 0) {
      this.profileForm.get('amount')?.setValue(amountFromClick);
    }
    this.amount = this.profileForm.get('amount')?.value;
    if (this.amount > 0 ){
      this.wedoogiftAPIService.getCards(this.amount).pipe(
        takeUntil(this.destroy$)).subscribe((data)=>{
        this.cardResult = data;
        if(this.cardResult.equal) {
          this.isEqual = true;
        }
        console.log(Object(this.cardResult));
        this.isResult = true;
      })
    }

  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }
}
