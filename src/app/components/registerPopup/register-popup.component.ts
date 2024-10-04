import { Component, ElementRef, ViewChild } from "@angular/core";
import { PopupLogic } from "../../shared/popup-logic.service";
import { AuthService } from "../../service/auth.service";
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from "@angular/common/http";
import { Router } from "@angular/router";
import { RegisterService } from "../../service/register.service";

@Component({
    selector: 'register-popup',
    standalone: true,
    imports: [FormsModule, HttpClientModule],
    templateUrl: './register-popup.component.html',
    styleUrl: '../../../styles.css'
})

export class RegisterPopupComponent {
    @ViewChild('warning', { static: true }) warning!: ElementRef;
    validationErrors: { [key: string]: string } = {};

    constructor(public pLogic: PopupLogic, private rService: RegisterService, private router: Router) { }

    registerUser(formData: any) {
        this.clearErrors();
        this.rService.registerUser(formData).subscribe(
            (response) => {
                if (response && response.token) {
                    this.pLogic.registerClose();
                    this.router.navigate(['/profile']);
                }
            },
            (error) => {
                if (error.status === 400) {
                    if (typeof error.error === 'string') {
                        this.parseAndSetErrors(error.error);
                    } else {
                        this.validationErrors = error.error;
                    }
                    this.displayErrors();
                } else if (error.status === 500) {
                    this.setWarning('Internal Server Error. Please try again');
                }
            }
        );
    }

    private clearErrors() {
        this.validationErrors = {};
        this.warning.nativeElement.innerText = '';
        this.warning.nativeElement.style.opacity = 0;
    }

    private setWarning(message: string) {
        this.warning.nativeElement.innerText = message;
        this.warning.nativeElement.style.opacity = 1;
    }

    private parseAndSetErrors(errorString: string) {
        const pairs = errorString.slice(1, -1).split(', ');
        pairs.forEach(pair => {
            const [key, value] = pair.split('=');
            this.validationErrors[key] = value;
        });
    }

    private displayErrors() {
        const errorMessages = Object.values(this.validationErrors);
        if (errorMessages.length > 0) {
            this.setWarning(errorMessages.join('\n'));
        }
    }
}