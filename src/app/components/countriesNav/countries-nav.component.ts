import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";
import { NavComponent } from "../../components/nav/nav.component";
import { CommonModule } from "@angular/common";
import { TimerComponent } from "./timer/timer.component";
import { GameLogic } from "../../shared/game-logic.service";
import { TimerLogic } from "../../shared/timer-logic.service";
import { GameComponent } from "./game/game.component";

@Component({
    selector: 'countries-nav',
    standalone: true,
    imports: [NavComponent, TimerComponent, CommonModule, GameComponent],
    styleUrl: '../../../styles.css',
    templateUrl: './countries-nav.component.html'
})

export class CountriesNavComponent {
    constructor(public tLogic: TimerLogic, public gLogic: GameLogic) { }
}