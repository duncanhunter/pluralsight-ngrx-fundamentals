import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private store:Store) {}

  ngOnInit() {
    this.store.subscribe((state) => console.log('Log Store From Home: ', state))
  }
}
