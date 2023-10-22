import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debouncetime',
  templateUrl: './debouncetime.component.html',
  styleUrls: ['./debouncetime.component.scss']
})
export class DebouncetimeComponent implements OnInit,AfterViewInit {



  loadingValue:boolean = false;
  @ViewChild('myInput') myInput!:ElementRef;
  reqData:string | null = ''
  @ViewChild('myInput2') myInput2!:ElementRef;
  reqData2:string | null = ''
  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    // Ex: 01
    const searchTerm = fromEvent<any>(this.myInput.nativeElement,'keyup');
    searchTerm
    .pipe(
      debounceTime(1000), // will send the value after 1 second
      map(event => event?.target?.value),
    )
    .subscribe(
      data => {
        this.reqData = data;
        this.loadingValue = true;
        setTimeout(() => {
          this.reqData = null;
          this.loadingValue = false;
        }, 3000);
      }

      
    )

    // Ex: 02
    const searchTerm2 = fromEvent<any>(this.myInput2.nativeElement,'keyup');
    searchTerm2
    .pipe(
      map(event => event?.target?.value),
      debounceTime(1000), // will send the value after 1 second
      distinctUntilChanged(), // wont send agian new request if the user after removing some keys adds the same sting
    )
    .subscribe(
      data => {
        this.reqData2 = data;
        this.loadingValue = true;
        setTimeout(() => {
          this.reqData2 = null;
          this.loadingValue = false;
        }, 3000);
      }

      
    )
  }

}
