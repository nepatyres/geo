import { CommonModule } from '@angular/common';
import { ElementRef, Injectable, ViewChild, Component } from '@angular/core';

@Component({
    selector: 'timer-logic',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './timer-logic.component.html',
    styleUrl: '../../../styles.css'
})

@Injectable({
    providedIn: 'root'
})

export class TimerLogicComponent {
    @ViewChild('timer', { static: true }) timer!: ElementRef;
    pause: boolean = false;
    second: number = 0;
    minute: number = 0;

    private intervalId: any;

    wrapperBtn() {
        if (!this.pause) {
            this.pause = true;
            this.intervalId = setInterval(() => {
                if (this.second + 1 === 60) {
                    this.minute = + 1
                    this.second = 0
                } else {
                    this.second += 1
                }
                this.timer.nativeElement.textContent = `${this.formatTime(this.minute)}:${this.formatTime(this.second)}`
            }, 1000)
        }
    }

    private formatTime(time: number) {
        return time < 10 ? `0${time}` : time
    }

    pauseBtn() {
        this.pause = false;
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
}