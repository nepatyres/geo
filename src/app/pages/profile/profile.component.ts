import { Component, OnInit } from "@angular/core";
import { NavComponent } from "../../components/nav/nav.component";
import { AuthService } from "../../service/auth.service";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { GameStatsService } from "../../service/game-stats.service";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-profile',
    standalone: true,
    imports: [NavComponent, CommonModule],
    templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit {
    games: boolean = false;
    gameStats: any;
    private authSubscription: Subscription = new Subscription();
    constructor(public authService: AuthService, private router: Router, private gSService: GameStatsService) { }

    ngOnInit() {
        this.authSubscription = this.authService.isAuthenticated.subscribe(isAuthenticated => {
            if (!isAuthenticated) {
                this.router.navigate(['/']);
            } else {
                this.fetchGameStats();
            }
        });
    }

    ngOnDestroy() {
        if (this.authSubscription) {
            this.authSubscription.unsubscribe();
        }
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