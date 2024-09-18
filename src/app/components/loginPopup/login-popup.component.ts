import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from "@angular/core";
import { RegisterPopupComponent } from "../registerPopup/register-popup.component";

@Component({
    selector: 'app-login-popup',
    standalone: true,
    imports: [CommonModule, RegisterPopupComponent],
    templateUrl: './login-popup.component.html',
    styleUrls: ['../../../styles.css']
})

export class LoginPopupComponent implements AfterViewInit {
    @ViewChild('closeLoginBtn') closeLoginBtn!: ElementRef;
    @ViewChild('registerBtn') registerBtn!: ElementRef
    @Output() close = new EventEmitter<void>();
    register: boolean = false;

    ngAfterViewInit(): void {
        if (this.closeLoginBtn && this.closeLoginBtn.nativeElement) {
            this.closeLoginBtn.nativeElement.addEventListener('click', this.onLoginCloseBtn.bind(this))
        }
        if (this.registerBtn && this.registerBtn.nativeElement) {
            this.registerBtn.nativeElement.addEventListener('click', this.onRegisterBtn.bind(this))
        }
    }

    onLoginCloseBtn(): void {
        this.close.emit()
    }

    onRegisterBtn(): void {
        this.register = true;
    }

    onRegisterBack(): void {
        this.register = false;
    }
}