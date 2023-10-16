import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit{
  response: unknown;

  isDellAvaliable():boolean {
    return false;
  }

  isHpAvaliable():boolean {
    return false;
  }

  ngOnInit(): void {

    //old syntax IN JS
    // let buylaptop = new Promise(function(resolve,reject) {
    //   resolve('Promise is resolved'),
    //   reject("Promise is rejected")
    // })

    //new syntax USING EX6 FAT ARROW FUNCTIONS
    let buylaptop = new Promise((resolve,reject) => {
      // resolve('Promise is resolved'),
      if(this.isDellAvaliable()){
        resolve("Dell Laptop is Avaliable");
      } else if(this.isHpAvaliable()){
        resolve("HP Laptop is Avaliable");
      } else{
        reject("Noting in avaliable in store, please buy from other store.")
      }
    })

    buylaptop.then( result => {
      setTimeout(() => {
        this.response = result
      }, 3000);
    }).catch( error => {
      setTimeout(() => {
        this.response = error
      }, 3000);
    })
  }

}
