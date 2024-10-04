import { CommonModule } from "@angular/common";
import { Component, ElementRef, ViewChild } from "@angular/core";
import { RegisterPopupComponent } from "../registerPopup/register-popup.component";
import { PopupLogic } from "../../shared/popup-logic.service";
import { AuthService } from "../../service/auth.service";
import { Router } from "@angular/router";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'login-popup',
    standalone: true,
    imports: [CommonModule, RegisterPopupComponent, FormsModule],
    templateUrl: './login-popup.component.html',
    styleUrl: '../../../styles.css'
})

export class LoginPopupComponent {
    errorMessage: string = '';
    @ViewChild('warning', { static: true }) warning!: ElementRef;

    constructor(public pLogic: PopupLogic, private authService: AuthService, private router: Router) { }

    loginUser(formData: any): void {
        this.authService.login(formData.username, formData.password).subscribe({
            next: () => {
                this.pLogic.loginClose();
                this.router.navigate(['/profile']);
            },
            error: (error) => {
                this.errorMessage = 'The username or password you entered is incorrect';
                this.loginWarning(this.errorMessage);
            }
        });
    }

    loginWarning(warning: string): void {
        if (this.warning && this.warning.nativeElement) {
            this.warning.nativeElement.innerText = warning;
            this.warning.nativeElement.style.opacity = 1;
        }
    }
}