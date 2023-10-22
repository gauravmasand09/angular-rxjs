import { Component } from '@angular/core';
import { LoadingService } from './utliity/loading.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-rxjs';


  constructor(private _loadingSvc:LoadingService){
    
  }

  loadingValue:Observable<boolean> = this._loadingSvc.getLoadingValue();

  
}
