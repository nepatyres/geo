import { Component } from "@angular/core";
import { NavComponent } from "../../components/nav/nav.component";
import { AuthService } from "../../service/auth.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-profile',
    standalone: true,
    imports: [NavComponent],
    templateUrl: './profile.component.html'
})

export class ProfileComponent {
    constructor(public authService: AuthService, private router: Router) { }

    ngOnInit(){
        this.authService.isLoggedIn().subscribe(isLoggedIn => {
            if(!isLoggedIn) {
                this.router.navigate(['/']);
            }
        });
    }

    backBtn() {
        window.history.back();
    }
}