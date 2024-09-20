import { Component} from "@angular/core";
import { PopupLogic } from "../../shared/popup-logic.service";

@Component({
    selector: 'register-popup',
    standalone: true,
    imports: [],
    templateUrl: './register-popup.component.html',
    styleUrl: '../../../styles.css'
})

export class RegisterPopupComponent {
    constructor(public pLogic: PopupLogic) { }
}