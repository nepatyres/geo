import { Component, OnInit } from "@angular/core";
import { NavComponent } from "../../components/nav/nav.component";
import { AuthService } from "../../service/auth.service";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { GameStatsService } from "../../service/game-stats.service";

@Component({
    selector: 'app-profile',
    standalone: true,
    imports: [NavComponent, CommonModule],
    templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit {
    games: boolean = false;
    gameStats: any;
    constructor(public authService: AuthService, private router: Router, private gSService: GameStatsService) { }

    ngOnInit(){
        this.authService.isLoggedIn().subscribe(isLoggedIn => {
            if(!isLoggedIn) {
                this.router.navigate(['/']);
            }
        });
        this.fetchGameStats();
    }

    fetchGameStats(): void{
        this.gSService.getGameStats().subscribe(
            (stats) => {
                this.gameStats = stats.reverse();
                this.games = true;
            }
        )
    }

    backBtn() {
        window.history.back();
    }
}