import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Components
import { CounterComponent } from './components/counter/counter.component';
import { CharizardComponent } from './components/charizard/charizard.component';
import { FatherComponent } from './components/father/father.component';
import { FatherSonComponent } from './components/father-son/father-son.component';
import { CounterRouteComponent } from './components/counter-route/counter-route.component';

@NgModule({
  declarations: [
    CounterComponent,
    CharizardComponent,
    FatherComponent,
    FatherSonComponent,
    CounterRouteComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class BasicModule { }
