import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor() { }

  print(value:string,containerId:string){
    let el = document.createElement('li');
    el.innerText = value;
    document.getElementById(containerId)?.appendChild(el)
  }
}
