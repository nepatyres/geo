import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPopupComponent } from '../loginPopup/login-popup.component';
import { PopupLogic } from '../../shared/popup-logic.service';

@Component({
    selector: 'nav',
    standalone: true,
    imports: [CommonModule, LoginPopupComponent],
    templateUrl: './nav.component.html',
    styleUrl: '../../../styles.css'
})

export class NavComponent {
    constructor(public pLogic: PopupLogic) { }
}
