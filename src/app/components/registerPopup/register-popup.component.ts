import { Component } from "@angular/core";
import { PopupLogic } from "../../shared/popup-logic.service";
import { AuthService } from "../../service/auth.service";
import {FormsModule} from '@angular/forms'

@Component({
    selector: 'register-popup',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './register-popup.component.html',
    styleUrl: '../../../styles.css'
})

export class RegisterPopupComponent {
    constructor(public pLogic: PopupLogic, private authService: AuthService) { }

    registerUser(formData: any) {
        this.authService.registerUser(formData).subscribe(
            (response) => {
                console.log('User registered', response);
            },
            (error) => {
                console.log('Error registering user', error);
            }
        )
    }
}