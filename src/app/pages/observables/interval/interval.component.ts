import { Component, ElementRef, ViewChild } from '@angular/core';
import { Subject, Subscription, fromEvent, interval, map, merge, startWith, switchMap, tap, timer } from 'rxjs';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent {

  broadcastIntervalSubscription$!:Subscription;
  broadcastTimerSubscription$!:Subscription;
  private subject = new Subject<void>();
  obsValue!:string;

  constructor(private _designUtilitySvc:AppServiceService){}

  ngAfterViewInit(): void {
    // const broadcastInterval = interval(2000);
    timer(0, 1000).subscribe(n => console.log('timer', n));
    interval(1000).subscribe(n => console.log('interval', n)); // here interval waits for 1 second delay then it will start but time doesnt
    const broadcastInterval = interval(2000);
    const broadcastTimer = timer(0,2000); // 5000 means start after 5 seconds with interval of 1 second.
    this.broadcastIntervalSubscription$ = broadcastInterval.subscribe(
     (res) =>{
       this.obsValue = `Value ${res}`;
       this._designUtilitySvc.print(this.obsValue,'elContainer1');
       this._designUtilitySvc.print(this.obsValue,'elContainer2');
       if(res > 5) {
        this.broadcastIntervalSubscription$.unsubscribe();
       }
      }
    )

    this.broadcastTimerSubscription$ = broadcastTimer.subscribe(
      (res) =>{
        this.obsValue = `Value ${res}`;
        this._designUtilitySvc.print(this.obsValue,'elContainer3');
        if(res > 5) {
         this.broadcastTimerSubscription$.unsubscribe();
        }
       }
     )
  }

  ngOnDestroy(): void {
    this.broadcastIntervalSubscription$.unsubscribe();
    this.broadcastTimerSubscription$.unsubscribe();

  }

}
