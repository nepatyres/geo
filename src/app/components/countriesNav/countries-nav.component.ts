import { Component} from "@angular/core";
import { NavComponent } from "../../components/nav/nav.component";
import { CommonModule } from "@angular/common";
import { TimerComponent } from "./timer.component";
import { GameLogic } from "../../shared/game-logic.service";
import { TimerLogic } from "../../shared/timer-logic.service";
import { GameComponent } from "./game.component";

@Component({
    selector: 'countries-nav',
    standalone: true,
    imports: [NavComponent, TimerComponent, CommonModule, GameComponent],
    styleUrl: '../../../styles.css',
    template:
        `<div class="w-full h-[86px] absolute z-20 items-center flex">
     <div class="grid flex-row w-[90%] my-0 mx-auto nav-grid">

        <timer></timer>

        <game></game>

            <nav></nav>
     </div>
    </div>`
})

export class CountriesNavComponent {
    constructor(public tLogic: TimerLogic, public gLogic: GameLogic) { }
}