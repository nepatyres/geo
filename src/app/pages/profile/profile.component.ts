import { Component } from "@angular/core";
import { NavComponent } from "../../components/nav/nav.component";

@Component({
    selector: 'app-profile',
    standalone: true,
    imports: [NavComponent],
    templateUrl: './profile.component.html'
})

export class ProfileComponent{


    backBtn(){
        window.history.back();
    }
}