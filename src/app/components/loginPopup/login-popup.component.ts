import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RegisterPopupComponent } from "../registerPopup/register-popup.component";
import { PopupLogic } from "../../shared/popup-logic.service";

@Component({
    selector: 'login-popup',
    standalone: true,
    imports: [CommonModule, RegisterPopupComponent],
    templateUrl: './login-popup.component.html',
    styleUrl: '../../../styles.css'
})

export class LoginPopupComponent {
    constructor(public pLogic: PopupLogic) { }
}