import { Component } from '@angular/core';
import { from, of } from 'rxjs';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent {
  ofCode = 
`
// RxJS v6+
import { of } from 'rxjs';
//emits any number of provided values in sequence
const source = of(1, 2, 3, 4, 5);
//output: 1,2,3,4,5
const subscribe = source.subscribe(val => console.log(val));
`

  fromCode = 
`
import { from } from 'rxjs';
const array = [10, 20, 30];
const result = from(array);

result.subscribe(x => console.log(x));

// Logs:
// 10
// 20
// 30
`

  constructor(private appSvc:AppServiceService){}
  obsMsg:any;
  ngOnInit(): void {
    // OF

    // Ex:01
    const obs1 = of('Gaurav','Abhinav','Shubham','Vaishak');
    obs1.subscribe(
      item => {
        this.appSvc.print(item,'elContainer1');
      }
    )

    // Ex:02
    const obs2 = of({a:'Gaurav',b:'Abhinav',c:'Shubham',d:'Vaishak'});
    obs2.subscribe(
      item => {
        this.obsMsg = {...item};
        // this.appSvc.print(item,'elContainer2');
      }
    )

    // From examples

    // Ex :01 From array

    const fromObs1 = from(['Gaurav','Abhinav','Shubham','Vaishak']);

    fromObs1.subscribe(
      item => {
        this.appSvc.print(item,'elContainer2');
      }
    )

    // Ex :02 From promise

    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve('Promise Resolved now')
      }, 3000);
    })

    const fromObs2 = from(promise);

    fromObs2.subscribe(
      item => this.appSvc.print(item, 'elContainer3')
    )

    // Ex 03 : string to obs

    const fromObs3 = from('Hello this Rxjs Practice Session');

    fromObs3.subscribe(
      item => {
        this.appSvc.print(item,'elContainer4');
      }
    )
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }
}
