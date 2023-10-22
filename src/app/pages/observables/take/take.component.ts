import { Component } from '@angular/core';
import { Subscription, from, interval, map, take, takeLast, takeUntil, tap, timer } from 'rxjs';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss'],
})
export class TakeComponent {
  takeCode = `
import { interval, take } from 'rxjs';

const intervalCount = interval(1000);
const takeFive = intervalCount.pipe(take(5));
takeFive.subscribe(x => console.log(x));

// Logs:
// 0
// 1
// 2
// 3
// 4  
`;

  constructor(private _appService: AppServiceService) {}

  ngOnInit(): void {
        let obsSub:Subscription;
        let obsSub1:Subscription;
        let obsSub2:Subscription;
        let obsSub3:Subscription;

        const arr = ['Gaurav','Ronaldo','Kaka','Messi','Drogba','Kross','Modric','Ronaldinho']
    
        // Ex : 01
        const source  = interval(1000);

        obsSub = source
        .pipe(
          take(4),
          map(data => arr[data]),
          tap(data => this._appService.print(data,'elContainer1')),
        )
        
        .subscribe(
          res => {
            console.log("res",res)
          }
        )

        // Ex - 02
        obsSub1 = from(arr)
        .pipe(
          takeLast(4),
          tap(data => this._appService.print(data,'elContainer2')),
        )
        
        .subscribe(
          res => {
            console.log("res",res)
          }
        )

        // Ex - 03
        let timer1 = timer(5000);
        obsSub2 = source
        .pipe(
          takeUntil(timer1),
          tap(data => this._appService.print(data,'elContainer3')),
        )
        
        .subscribe(
          res => {
            console.log("res",res)
          }
        )

        setTimeout(() => {
          obsSub.unsubscribe();
          obsSub1.unsubscribe();
          obsSub2.unsubscribe();
        }, 10000);
  }
}
