import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-counter-route',
  templateUrl: './counter-route.component.html',
  styles: ``
})
export class CounterRouteComponent {

  public counter: number = 0;

  constructor(
    private activateRoute: ActivatedRoute
  ) { }

  public ngOnInit(): void {
    let initialValue = Number(this.activateRoute.snapshot.paramMap.get('initial'));
    this.counter = isNaN(initialValue) ? 10 : initialValue;
  }

  public increaseBy(value: number): void {
    this.counter += value;
  }

}
