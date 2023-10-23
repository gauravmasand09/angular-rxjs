import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor() { }

  exclusive = new Subject<boolean>();

  print(value:string | any,containerId:string){
    let el = document.createElement('li');
    el.innerText = value;
    document.getElementById(containerId)?.appendChild(el)
  }

  
}
