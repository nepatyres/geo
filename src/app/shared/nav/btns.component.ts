import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPopupComponent } from '../../components/loginPopup/login-popup.component';

@Component({
    selector: 'app-btns',
    standalone: true,
    imports: [CommonModule, LoginPopupComponent],
    templateUrl: './btns.component.html',
    styleUrls: ['../../../styles.css']
})

export class BtnsComponent {
    toggler: boolean = false;
    login: boolean = false;
    register:boolean = false;

    loginBtn(): void {
        this.login = true;
    };

    togglerBtn():void{
        this.toggler = true;
    }

    togglerCloseBtn(): void {
        this.toggler = false;
    }

    onLoginClose(): void {
        this.login = false;
    }
}
