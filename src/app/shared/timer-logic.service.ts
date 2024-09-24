import { ElementRef, Injectable, ViewChild } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class TimerLogic {
    private timerElement: ElementRef | null = null;
    pause: boolean = false
    stop: boolean = false
    second: number = 0
    minute: number = 0

    private intervalId: any;

    setTimerElement(element: ElementRef) {
        this.timerElement = element
    }

    wrapperBtn() {
        if (!this.pause && !this.stop) {
            this.pause = true
            this.intervalId = setInterval(() => {
                if (this.second + 1 === 60) {
                    this.minute++
                    this.second = 0
                } else {
                    this.second++
                }
                if (this.timerElement) {
                    this.timerElement.nativeElement.textContent = `${this.formatTime(this.minute)}:${this.formatTime(this.second)}`
                }
            }, 1000)
        }
    }

    private formatTime(time: number) {
        return time < 10 ? `0${time}` : time
    }

    pauseBtn() {
        this.pause = false;
        if (this.intervalId) {
            clearInterval(this.intervalId)
            this.intervalId = null
        }
    }

    stopTimer() {
        this.pauseBtn()
        this.stop = true
    }

    getTime(){
        return `${this.formatTime(this.minute)}:${this.formatTime(this.second)}`
    }
}