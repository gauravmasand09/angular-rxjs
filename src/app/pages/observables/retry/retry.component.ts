import { Component } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { delay, retry, retryWhen, scan } from 'rxjs';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent {
  constructor(private httpClient:HttpClient){}
  person:any;
  fetching:boolean = false;
  statusMessage:string = 'No Data'
  ngOnInit(){

  }


  fetchDetails(){
    this.fetching = true;
    this.statusMessage = 'Fetching Data';
    this.httpClient.get('https://dummyjson.com/users/1')
    .pipe(
      // retry(5)
      retryWhen(ERR => ERR.pipe(
        delay(5000),
        scan((retryCcount) => {
          if(retryCcount >= 5){
            throw ERR;
          }else{
            retryCcount = retryCcount +1;
            this.statusMessage = "Retry Attempt #"+retryCcount;
            console.log("retryCcount",retryCcount)
            return retryCcount;
          }
        },0)
      ))
    )
    .subscribe(response => {
      this.person = response;
      this.fetching = false;
      this.statusMessage = 'Data Fetched';
    },
    error => {
      this.person = null;
      this.fetching = false;
      this.statusMessage = 'Problem Fetching Data';
    });
  }
}
