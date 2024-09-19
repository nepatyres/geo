import { Component, OnInit } from "@angular/core";
import { BtnsComponent } from "../nav/btns.component";
import { LogicService } from "../logic.service";

@Component({
    selector:'app-countries-nav',
    standalone: true,
    imports: [BtnsComponent],
    styleUrl: '../../../styles.css',
    templateUrl: './countries-nav.component.html'
})

export class CountriesNavComponent implements OnInit{
    constructor(private logic: LogicService){}

    ngOnInit(): void {
        this.logic.pauseBtn();
    }
}