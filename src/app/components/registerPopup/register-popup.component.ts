import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from "@angular/core";

@Component({
    selector: 'app-register-popup',
    standalone: true,
    imports: [],
    templateUrl: './register-popup.component.html',
    styleUrl: '../../../styles.css'
})

export class RegisterPopupComponent {
    @Output() back = new EventEmitter<void>();
    @Output() close = new EventEmitter<void>();

    onRegisterBack(): void {
        this.back.emit();
    }

    onRegisterClose():void{
        this.close.emit();
    }
}