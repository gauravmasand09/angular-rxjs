import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isShown!:boolean;
  exclusive:boolean = false
  constructor(public router:Router,private _appSvc:AppServiceService) {
    this._appSvc.exclusive.subscribe(
      data => {
        this.exclusive = data;
      }
    )
  }

  ngOnInit(): void {
  }
}
