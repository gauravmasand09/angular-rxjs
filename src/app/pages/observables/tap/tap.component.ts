import { Component } from '@angular/core';
import { from, filter, toArray, interval, map, tap, Subscription } from 'rxjs';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent {
  tapCode = `
  import { of, tap, map } from 'rxjs';

of(Math.random()).pipe(
  tap(console.log),
  map(n => n > 0.5 ? 'big' : 'small')
).subscribe(console.log);
  
      `;
      constructor(private _appService: AppServiceService) {}
    
      datArr = [
        { id: 1, name: 'Gaurav' ,gender: 'Male' },
        { id: 2, name: 'Abhinav' ,gender: 'Female'  },
        { id: 3, name: 'Shubham'  ,gender: 'Male' },
        { id: 8, name: 'Vaishak' ,gender: 'Female'},
        { id: 10, name: 'Vishal' ,gender: 'Male' },
        { id: 11, name: 'Pankaj' ,gender: 'Female' },
      ];
  
      data1:any;
      data2:any;
      data3:any;
  
    
    
      ngOnInit() {
        //ex - 01

        let obsSub:Subscription;

        const arr = ['Gaurav','Ronaldo','Kaka','Messi','Drogba','Kross','Modric','Ronaldinho']
    
        const source  = interval(2000);
        obsSub = source
        .pipe(
          map(data => arr[data]),
          tap(data => data == 'Drogba' ? obsSub.unsubscribe() : this._appService.print(data,'elContainer1'))
        )
        
        .subscribe(
          res => {
            console.log("res",res)
          }
        )
    
        //ex - 02
    
        const source1  = from(this.datArr);
        source1.pipe(
          filter(filter => filter.gender == 'Male'),
          toArray()
        )
        .subscribe(
          res => {
            this.data2 = res;
          }
        )
  
        //ex - 03
    
        const source3  = from(this.datArr);
        source3.pipe(
          filter(filter => filter.id < 6),
          toArray()
        )
        .subscribe(
          res => {
            this.data3 = res;
          }
        )
      }
}
