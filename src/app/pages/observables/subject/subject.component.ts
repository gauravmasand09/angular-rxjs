import { Component } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent {
  constructor(private _designSvc:AppServiceService){

  }

  ngOnInit(): void {
    this._designSvc.exclusive.next(true);
  }

  ngOnDestroy(): void {
    this._designSvc.exclusive.next(false);
  }
}
