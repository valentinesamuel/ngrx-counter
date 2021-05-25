import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterComponent } from './counter/counter.component';
import { CustomCounterInputComponent } from './custom-counter-input/custom-counter-input.component';
import { CounterReducer } from './state/counter.reducer';
import { counterStateName } from './state/counter.selectors';

const routes: Routes = [{ path: '', component: CounterComponent }];

@NgModule({
      imports: [CommonModule, FormsModule, RouterModule.forChild(routes), StoreModule.forFeature(counterStateName, CounterReducer),],
      exports: [],
      declarations: [
            CounterButtonsComponent,
            CounterOutputComponent,
            CounterComponent,
            CustomCounterInputComponent,
      ],
      providers: [],
})
export class CounterModule { }
