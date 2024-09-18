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

export class BtnsComponent implements AfterViewInit {
    @ViewChild('loginBtn') loginBtn!: ElementRef;
    @ViewChild('togglerBtn') togglerBtn!: ElementRef;
    @ViewChild('togglerCloseBtn') togglerCloseBtn!: ElementRef;
    toggler: boolean = false;
    login: boolean = false;

    ngAfterViewInit(): void {
        if (this.loginBtn && this.loginBtn.nativeElement) {
            this.loginBtn.nativeElement.addEventListener('click', this.onLoginClick.bind(this));
        }
        if (this.togglerBtn && this.togglerBtn.nativeElement) {
            this.togglerBtn.nativeElement.addEventListener('click', this.onTogglerClick.bind(this));
        }
    };

    onLoginClick(): void {
        this.login = true;
    };

    onTogglerClick(): void {
        this.toggler = true;
        setTimeout(() => {
            if (this.togglerCloseBtn && this.togglerCloseBtn.nativeElement) {
                this.togglerCloseBtn.nativeElement.addEventListener('click', this.onTogglerClose.bind(this));
            }
        }, 0);
    };

    onTogglerClose(): void {
        this.toggler = false;
    }

    onLoginClose(): void {
        this.login = false;
    }
}
