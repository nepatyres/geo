import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { ScoreLogic } from "../../../shared/score-logic.service";

@Component({
    selector: 'score-popup',
    standalone: true,
    imports: [],
    templateUrl: './score-popup.component.html',
    styleUrl: '../../../../styles.css'
})

export class ScorePopupComponent implements AfterViewInit{
    @ViewChild('quizTitle') quizTitleElement!: ElementRef
    @ViewChild('quizScore') quizScoreElement!: ElementRef
    @ViewChild('quizAttempts') quizAttemptsElement!: ElementRef
    @ViewChild('quizTime') quizTimeElement!: ElementRef
    constructor(public sLogic: ScoreLogic){}

    ngAfterViewInit(): void {
        this.sLogic.setElement(this.quizTitleElement, this.quizScoreElement, this.quizAttemptsElement, this.quizTimeElement)
    }
}