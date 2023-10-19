import { Component } from '@angular/core';
import { Observable, Observer, Subscription, of } from 'rxjs';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent {

  techStatus!:string;
  subs2!:Subscription;
  constructor(public appSvc:AppServiceService){}

  ngOnInit(): void {

    // Ex: 01

    const manual = new Observable((observer) => {
      setTimeout(() => {
        observer.next("Angular");
      }, 2000);
  
  
      setTimeout(() => {
        observer.next("ReactJS");
      }, 2000);
  
  
      setTimeout(() => {
        observer.next("Jquery");
      }, 6000);
      
      setTimeout(() => {
        observer.next("Javascript");
        observer.complete();
      }, 8000);
    });

    manual.subscribe({
      next: (v) => this.appSvc.print(v,'elContainer1'),
      error: (erroe) => this.techStatus = 'error',
      complete: () => {
        this.techStatus = 'completed';
      }
    })


    // Ex: 02 custom interval

   const arr = ['Angular','React','javascript','Jquery']

    const custom2 = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(arr[count]);
        if(count > 3){
          observer.complete();
        }
        ++count;
      },2000)
    })

   this.subs2 = custom2.subscribe({
      next: (v) => this.appSvc.print(v,'elContainer2'),
      error: (erroe) => this.techStatus = 'error',
      complete: () => {
        this.techStatus = 'completed';
        this.subs2.unsubscribe()
      }
    })
  }

  sequenceSubscriber(observer: Observer<string>) {

    
    
  }

}
