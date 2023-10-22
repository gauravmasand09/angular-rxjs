import { Component } from '@angular/core';
import { Subscription, from, interval, map, tap } from 'rxjs';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  mapCode = 
`
import { fromEvent, map } from 'rxjs';

const clicks = fromEvent<PointerEvent>(document, 'click');
const positions = clicks.pipe(map(ev => ev.clientX));

positions.subscribe(x => console.log(x));  
`
constructor(private _appService:AppServiceService){}

//messages

msg1!:string;
msg2!:string;


//subscriptions



sub1!:Subscription;
sub2!:Subscription;
sub3!:Subscription;



  ngOnInit(){

    //ex - 01
    const broadCast = interval(1000);

    this.sub1 = broadCast.pipe(
      map((resp) => "Video "+(resp+1)),
      tap((resp) => this.msg1 = resp)
    ).subscribe()


    setTimeout(() => {
      this.sub1.unsubscribe();
    }, 10000);

    //ex - 02

    this.sub2 = broadCast.pipe(
      map((resp) => ((resp + 1) * 10).toString()),
      tap((resp) => this.msg2 = resp)
    ).subscribe()


    setTimeout(() => {
      this.sub2.unsubscribe();
    }, 20000);

    //ex - 03

    const members = [
      {id:1,name:'Gaurav'},
      {id:2,name:'Abhinav'},
      {id:3,name:'Shubham'},
      {id:4,name:'Vrushali'},
      {id:5,name:'Saurabh'},
      {id:6,name:'Shweta'},
      {id:7,name:'Rohan'},
      {id:8,name:'Vaishak'},
      {id:9,name:'Himanshu'},
      {id:10,name:'Vishal'},
      {id:11,name:'Pankaj'},
      {id:12,name:'Omkar'},
    ]

    // since this in an arrya data we can convert it into observable using from;

    const memObs = from(members);

    this.sub3 = memObs.pipe(
      map(( data ) => "Name -> "+data.name),
      tap((data) => this._appService.print(data,'elContainer1'))
    ).subscribe()
  }
}
