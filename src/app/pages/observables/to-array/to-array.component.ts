import { Component } from '@angular/core';
import { Subscription, from, interval, map, of, take, toArray } from 'rxjs';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss'],
})
export class ToArrayComponent {
  toArrayCode = `
import { interval, take, toArray } from 'rxjs';

const source = interval(1000);
const example = source.pipe(
  take(10),
  toArray()
);

example.subscribe(value => console.log(value));

// output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
`;
  userList: { name: string; skill: string; }[] = [];
  friendsList: string[] = [];


constructor(private _appSvc:AppServiceService){}

  dummyUsers = [
    {name:'Gaurav',skill:'Angular'},
    {name:'Abhinav',skill:'Java'},
    {name:'Shubham',skill:'Data'},
  ]

  subscription!: Subscription;

  ngOnInit(): void {
    const source = interval(1000);

    this.subscription = source.pipe(
      take(5), // will take only 5
      toArray() // then convert it into array
      ).subscribe(res => {
        this._appSvc.print(res,'elContainer1')
    });

    const source2 = from(this.dummyUsers);
    source2.pipe(toArray())
    .subscribe(
      res => {
        this.userList = [...res]
      }
    )

    const source3 = of('Gaurav','Abhinav','Shubham','Vaishak');
    source3.pipe(toArray())
    .subscribe(
      res => {
        this.friendsList = [...res]
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
