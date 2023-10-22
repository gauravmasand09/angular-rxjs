import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class LoadingService{
    private mySubject = new BehaviorSubject<boolean>(false);

    private myLoadingValue = this.mySubject.asObservable();


    setProperty(value:boolean){
        this.mySubject.next(value);
    }

    getLoadingValue(){
        return this.myLoadingValue;
    }
}