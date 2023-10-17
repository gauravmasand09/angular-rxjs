import { Component, ElementRef, ViewChild } from '@angular/core';
import { Subject, Subscription, fromEvent, map, merge, startWith, switchMap, tap } from 'rxjs';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent {

  buttonSubscription = new Subscription();
  @ViewChild('addBtn') addBtn!: ElementRef;
  @ViewChild('inputValue') inputValue!: ElementRef;
  searchValue:any;
  constructor(private _designSvc:AppServiceService){}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const clickEvt = fromEvent(this.addBtn.nativeElement, 'click');
    const inputEvt = fromEvent(this.inputValue.nativeElement, 'keyup');
    this.buttonSubscription = 
    merge(
      clickEvt
      )
    .subscribe((val) => {
      if(this.searchValue){
        this._designSvc.print(this.searchValue,'elContainer1');
        this._designSvc.print(this.searchValue,'elContainer2')
      } else{
        alert("Please write some text to input")
      }
    });

  }

  ngOnDestroy(): void {
    this.buttonSubscription.unsubscribe()
  }

}
