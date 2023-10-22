import { Component, computed, effect, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-angular16',
  templateUrl: './angular16.component.html',
  styleUrls: ['./angular16.component.scss']
})
export class Angular16Component {
  firstName = signal('Jane');
  lastName = signal('Doe');
  fullName = computed(() => `${this.firstName()} ${this.lastName()}`);

  count = signal(0);
  count$ = toObservable(this.count);

  constructor() {
    effect(() => console.log('Name changed:', this.fullName()));
  }

  ngOnInit(): void {
    this.count$.subscribe((value) => console.log("value",value));
  }

  setName(newName: string) {
    this.firstName.set(newName);
  }
}
