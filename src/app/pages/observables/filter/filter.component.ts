import { Component } from '@angular/core';
import { Subscription, from, pluck, toArray, tap, filter } from 'rxjs';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  pluckCode = `
import { fromEvent, filter } from 'rxjs';

const div = document.createElement('div');
div.style.cssText = 'width: 200px; height: 200px; background: #09c;';
document.body.appendChild(div);

const clicks = fromEvent(document, 'click');
const clicksOnDivs = clicks.pipe(filter(ev => (<HTMLElement>ev.target).tagName === 'DIV'));
clicksOnDivs.subscribe(x => console.log(x));

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
  
      const source  = from(this.datArr);
      source.pipe(
        filter(filter => filter.name.length <= 6),
        toArray()
      )
      
      
      .subscribe(
        res => {
          this.data1 = res;
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
