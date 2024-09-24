import { Component } from "@angular/core";
import { ScoreLogic } from "../../../shared/score-logic.service";

@Component({
    selector: 'score-popup',
    standalone: true,
    imports: [],
    templateUrl: './score.component.html',
    styleUrl: '../../../../styles.css'
})

export class ScorePopupComponent{
    constructor(public sLogic: ScoreLogic){}
}