import { Component } from '@angular/core';
import { Subscription, interval, map, tap, from, pluck, toArray } from 'rxjs';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss'],
})
export class PluckComponent {
  pluckCode = `
import { fromEvent, pluck } from 'rxjs';

const clicks = fromEvent(document, 'click');
const tagNames = clicks.pipe(pluck('target', 'tagName'));

tagNames.subscribe(x => console.log(x));
  `;
  constructor(private _appService: AppServiceService) {}

  users = [
    { id: 1, name: 'Gaurav' ,job: {title:'Developer'} },
    { id: 2, name: 'Abhinav' ,job: {title:'Developer'}  },
    { id: 3, name: 'Shubham'  ,job: {title:'Data'} },
    { id: 8, name: 'Vaishak' ,job: {title:'Support'} },
    { id: 10, name: 'Vishal' ,job: {title:'Developer'} },
    { id: 11, name: 'Pankaj' ,job: {title:'Tester'} },
  ];

  data1: string[] = [];
  data2: any[] = [];


  //messages

  msg1!: string;
  msg2!: string;

  //subscriptions

  sub1!: Subscription;
  sub2!: Subscription;
  sub3!: Subscription;

  ngOnInit() {
    //ex - 01

    from(this.users)
      .pipe(
        pluck('name'),
        toArray(),
        tap((res) => (this.data1 = res))
      )
      .subscribe((res) => {
        console.log('res', res);
      });

    //ex - 02

    from(this.users)
      .pipe(
        pluck('job','title'),
        toArray()
      )
      .subscribe((res) => {
        this.data2 = res;
      });

  }
}
