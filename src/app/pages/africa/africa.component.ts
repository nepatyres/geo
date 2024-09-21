import { Component, ViewChild } from '@angular/core';
import { CountriesNavComponent } from '../../components/countriesNav/countries-nav.component';
import { TimerLogicComponent } from '../../components/timerLogic/timer-logic.component';

@Component({
  selector: 'app-africa',
  standalone: true,
  imports: [CountriesNavComponent],
  templateUrl: './africa.component.html',
  styleUrl: '../../../styles.css',
  providers: [TimerLogicComponent]
})
export class AfricaComponent {
  constructor(public tLogic: TimerLogicComponent) {}
  
  svgClick() {
    console.log('click')
    this.tLogic.wrapperBtn()
  }
}
