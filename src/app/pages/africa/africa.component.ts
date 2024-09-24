import { Component, ViewChild } from '@angular/core';
import { CountriesNavComponent } from '../../components/countriesNav/countries-nav.component';
import { GameLogic } from '../../shared/game-logic.service';
import { TimerLogic } from '../../shared/timer-logic.service';
import { ScorePopupComponent } from '../../components/countriesNav/scorePopup/score-popup.component';
import { ScoreLogic } from '../../shared/score-logic.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-africa',
  standalone: true,
  imports: [CountriesNavComponent, ScorePopupComponent, CommonModule],
  templateUrl: './africa.component.html',
  styleUrl: '../../../styles.css',
})
export class AfricaComponent {
  constructor(public tLogic: TimerLogic, public gLogic: GameLogic, public sLogic: ScoreLogic) { }

}
