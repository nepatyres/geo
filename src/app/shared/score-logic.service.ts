import { ElementRef, Injectable } from "@angular/core";
import { TimerLogic } from "./timer-logic.service";

@Injectable({
    providedIn: 'root'
})

export class ScoreLogic {
    constructor(public tLogic: TimerLogic) { }
    private quizTitle: ElementRef | null = null
    private quizScore: ElementRef | null = null
    private quizAttempts: ElementRef | null = null
    private quizTime: ElementRef | null = null
    scoreDisplay: boolean = false

    setElement(title: ElementRef, score: ElementRef, attempts: ElementRef, time: ElementRef) {
        this.quizTitle = title
        this.quizScore = score
        this.quizAttempts = attempts
        this.quizTime = time
    }

    scorePopup(countriesCount: number, score: number, attempts: number) {
        if (this.quizTitle && this.quizScore && this.quizAttempts && this.quizTime) {
            this.quizTitle.nativeElement.textContent = attempts < countriesCount / 5 && score === countriesCount ? 'Excellent!🥳' : 'You can do better!🤬'
            this.quizScore.nativeElement.textContent = `${score}/${countriesCount}`
            this.quizAttempts.nativeElement.textContent = attempts
            this.quizTime.nativeElement.textContent = this.tLogic.getTime()
        }
        this.scoreDisplay = true
    }

    newGame() {
        window.location.reload()
    }

    scoreClose() {
        this.scoreDisplay = false
    }
}