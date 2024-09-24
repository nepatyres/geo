import { CommonModule } from '@angular/common'
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core'
import { GameLogic } from '../../../shared/game-logic.service'

@Component({
    selector: 'game',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './game.component.html',
    styleUrl: '../../../../styles.css'
})

export class GameComponent implements AfterViewInit {
    @ViewChild('countryName') countryNameElement !: ElementRef
    constructor(public gLogic: GameLogic){}

    ngAfterViewInit(): void {
        this.gLogic.setCountryNameElement(this.countryNameElement)
    }
}