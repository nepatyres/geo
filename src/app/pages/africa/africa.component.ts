import { Component, ViewChild } from '@angular/core';
import { CountriesNavComponent } from '../../components/countriesNav/countries-nav.component';
import { GameLogic } from '../../shared/game-logic.service';
import { TimerLogic } from '../../shared/timer-logic.service';

@Component({
  selector: 'app-africa',
  standalone: true,
  imports: [CountriesNavComponent],
  templateUrl: './africa.component.html',
  styleUrl: '../../../styles.css',
})
export class AfricaComponent {
  constructor(public tLogic: TimerLogic, public gLogic: GameLogic) { }

}
