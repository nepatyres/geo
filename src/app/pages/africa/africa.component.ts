import { Component } from '@angular/core';
import { CountriesNavComponent } from '../../components/countriesNav/countries-nav.component';
import { TimerLogicComponent } from '../../components/timerLogic/timer-logic.component';

@Component({
  selector: 'app-africa',
  standalone: true,
  imports: [CountriesNavComponent, TimerLogicComponent],
  templateUrl: './africa.component.html',
  styleUrl: '../../../styles.css'
})
export class AfricaComponent {
  constructor(public tLogic: TimerLogicComponent) { }
}
