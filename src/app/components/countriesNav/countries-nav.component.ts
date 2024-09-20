import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";
import { NavComponent } from "../../components/nav/nav.component";
import { CommonModule } from "@angular/common";
import { TimerLogicComponent } from "../timerLogic/timer-logic.component";

@Component({
    selector: 'countries-nav',
    standalone: true,
    imports: [NavComponent, TimerLogicComponent, CommonModule],
    styleUrl: '../../../styles.css',
    templateUrl: './countries-nav.component.html'
})

export class CountriesNavComponent {
    constructor(public tLogic: TimerLogicComponent) { }
}