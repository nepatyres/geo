import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { TimerLogic } from '../../../shared/timer-logic.service';

@Component({
    selector: 'timer',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './timer.component.html',
    styleUrl: '../../../../styles.css'
})

export class TimerComponent implements AfterViewInit {
    @ViewChild('timer') timerElement!: ElementRef;
    constructor(public tLogic: TimerLogic) { }

    ngAfterViewInit() {
        this.tLogic.setTimerElement(this.timerElement);
    }
}