import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CountriesNavComponent } from '../../components/countriesNav/countries-nav.component';
import { GameLogic } from '../../shared/game-logic.service';
import { TimerLogic } from '../../shared/timer-logic.service';
import { ScorePopupComponent } from '../../components/countriesNav/score-popup.component';
import { ScoreLogic } from '../../shared/score-logic.service';
import { CommonModule } from '@angular/common';
import { ZoomLogic } from '../../shared/zoom-logic.service';

@Component({
  selector: 'app-world',
  standalone: true,
  imports: [CountriesNavComponent, ScorePopupComponent, CommonModule],
  templateUrl: './world.component.html',
  styleUrl: '../../../styles.css',
})
export class WorldComponent implements AfterViewInit {

  @ViewChild('mapSvg') mapSvg!: ElementRef<SVGSVGElement>;
  @ViewChild('wrapper') wrapper!: ElementRef<HTMLElement>;

  constructor(public tLogic: TimerLogic, public gLogic: GameLogic, public sLogic: ScoreLogic, public zLogic: ZoomLogic) { }

  ngAfterViewInit() {
    this.zLogic.initializeZoom(this.mapSvg.nativeElement, this.wrapper.nativeElement);
  }
}