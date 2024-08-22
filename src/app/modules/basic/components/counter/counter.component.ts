import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit {

  public counter: number = 0;

  constructor() { }

  public ngOnInit(): void {
  }

  public increseBy(): void {
    this.counter++;
  }

  public decreaseBy(): void {
    this.counter--;
  }

}
