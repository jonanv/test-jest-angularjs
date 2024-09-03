import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { CounterComponent } from '../modules/basic/components/counter/counter.component';
import { CharizardComponent } from '../modules/basic/components/charizard/charizard.component';
import { FatherComponent } from '../modules/basic/components/father/father.component';

const routes: Routes = [
  {
    path: 'basic/counter',
    component: CounterComponent
  },
  {
    path: 'basic/charizard',
    component: CharizardComponent
  },
  {
    path: 'basic/father',
    component: FatherComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'basic/counter'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
