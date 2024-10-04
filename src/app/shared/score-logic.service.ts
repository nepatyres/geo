import { ElementRef, Injectable } from "@angular/core";
import { TimerLogic } from "./timer-logic.service";

@Injectable({
    providedIn: 'root'
})

export class ScoreLogic {
    constructor(public tLogic: TimerLogic) { }
    quizTitle: string = ''
    quizScore: string = ''
    quizAttempts: number = 0
    quizTime: string = ''
    scoreDisplay: boolean = false
    
    scorePopup(countriesCount: any, score: any, attempts: any) {
            this.quizTitle = attempts < countriesCount / 5 && score === countriesCount ? 'Excellent!🥳' : 'You can do better!🤬'
            this.quizScore = `${score}/${countriesCount}`
            this.quizAttempts = attempts
            this.quizTime = this.tLogic.getTime()
        this.scoreDisplay = true
    }

    newGame() {
        window.location.reload()
    }

    scoreClose() {
        this.scoreDisplay = false
    }
}