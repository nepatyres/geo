import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { RegisterPopupComponent } from "../registerPopup/register-popup.component";

@Component({
    selector: 'app-login-popup',
    standalone: true,
    imports: [CommonModule, RegisterPopupComponent],
    templateUrl: './login-popup.component.html',
    styleUrls: ['../../../styles.css']
})

export class LoginPopupComponent {
    @Output() loginClose = new EventEmitter<void>();
    register: boolean = false;

    registerBtn(): void {
        this.register = true;
    }

    loginCloseBtn(): void {
        this.loginClose.emit();
    }

    onRegisterBack(): void {
        this.register = false;
    }

    onRegisterClose(): void{
        this.register = false;
        this.loginClose.emit();
    }
}