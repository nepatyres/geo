import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { LoginPopupComponent } from '../loginPopup/login-popup.component';
import { PopupLogic } from '../../shared/popup-logic.service';
import { continents } from '../../constants/countries';
import { AuthService } from '../../service/auth.service';

@Component({
    selector: 'nav',
    standalone: true,
    imports: [CommonModule, LoginPopupComponent],
    templateUrl: './nav.component.html',
    styleUrl: '../../../styles.css'
})

export class NavComponent implements OnInit {
    loginBtn: boolean = true;
    continents = continents;

    constructor(public pLogic: PopupLogic, public authService: AuthService, private titleService: Title) { }

    ngOnInit() {
        const currentTitle = this.titleService.getTitle();
        this.loginBtn = !(currentTitle === 'Profile');
    }
}
