import { Injectable } from '@angular/core';
import { Africa, Americas, Asia, Europe, World } from '../constants/countries';
import { TimerLogic } from './timer-logic.service';
import { ScoreLogic } from './score-logic.service';
import { AuthService } from '../service/auth.service';
import { GameStatsService } from '../service/game-stats.service';

@Injectable({
    providedIn: 'root'
})

export class GameLogic {
    constructor(public tLogic: TimerLogic, public sLogic: ScoreLogic, public gService: GameStatsService, public authService: AuthService) { }
    game: boolean = true
    statsPopup = false
    gameStarted: boolean = false
    continent: string[] = ['']
    continentAtStart: string[] = ['']
    countriesCount: number = 0
    countriesCountAtStart: number = 0
    displayCountryName: string = 'Click on'
    countryName: string = 'Click on'
    score: number = 0
    attempts: number = 0
    con: string = '';

    random() {
        return Math.floor(Math.random() * this.continent.length);
    }

    wrapperBtn(con: string) {
        if (!this.gameStarted && this.game) {
            this.gameStarted = true;
            this.continent =
                con === 'Africa' ? Africa :
                    con === 'Americas' ? Americas :
                        con === 'Asia' ? Asia :
                            con === 'Europe' ? Europe : World

            this.con = con;
            this.countriesCount = this.continent.length;
            this.countriesCountAtStart = this.continent.length;
            this.continentAtStart = this.continent;
            this.nextRound();
        }
    }

    round(event: MouseEvent | null = null) {
        if (this.gameStarted && event && this.countryName) {
            const clickedCountry = (event.target as HTMLElement).id;
            const country = (event.target as HTMLElement);
            const tspanElement = document.getElementById(`${clickedCountry}-tspan`);
            if (clickedCountry === this.countryName) {
                country.style.fill = 'rgba(20,39,51,0.8)';
                tspanElement?.classList.remove('hidden');
                if (this.countriesCount) {
                    setTimeout(() => {
                        tspanElement?.classList.add('hidden');
                    }, 1000)
                }
                this.score++
                this.nextRound()
            } else if (clickedCountry && this.countryName && this.continent.includes(clickedCountry)) {
                country.style.fill = 'rgba(155, 1, 1,0.8)';
                country.style.transition = 'fill 0.2s ease';
                if (tspanElement) {
                    tspanElement.classList.remove('hidden');
                    setTimeout(() => {
                        country.style.fill = '';
                        tspanElement.classList.add('hidden');
                    }, 700)
                }
                this.attempts++;
            }
        }
    }

    skipBtn() {
        const correctCountry = document.getElementById(this.countryName)
        if (this.countryName && this.gameStarted && this.countriesCount >= 0) {
            const tspanElement = document.getElementById(`${this.countryName}-tspan`);
            tspanElement?.classList.remove('hidden');
            correctCountry?.style?.setProperty('fill', 'rgba(20,39,51,0.8)');
            if (this.countriesCount > 1) {
                setTimeout(() => {
                    tspanElement?.classList.add('hidden');
                }, 1000)
            }
            this.nextRound();
        }
    }

    nextRound() {
        if (this.gameStarted && this.countryName && this.countriesCount >= 1) {
            this.continent = this.continent.filter(country => country !== this.countryName);
            this.countriesCount--;
            this.countryName = this.continent[this.random()];
            this.displayCountryName = this.countryName.replace(/-/g, ' ');

        } else {
            this.gameEnd();
        }
    }

    gameEnd() {
        if (this.gameStarted) {
            this.gameStarted = false;
            this.game = false;
            this.tLogic.stopTimer();
            this.sLogic.scorePopup(this.countriesCountAtStart, this.score, this.attempts);
            for (let i = 0; i <= this.countriesCountAtStart; i++) {
                const tspanElement = document.getElementById(`${this.continentAtStart[i]}-tspan`);
                tspanElement?.classList.remove('hidden');
            }
            this.authService.isLoggedIn().subscribe(isLoggedIn => {
                if (isLoggedIn && this.authService.isTokenValid()) {
                  const username = this.authService.getUsername();
                  if (username) {
                    const gameStats = {
                      username: username,
                      continent: this.con,
                      score: this.score,
                      attempts: this.attempts,
                      time: this.tLogic.getTime()
                    };
                    this.gService.gameStats(gameStats).subscribe(
                      response => console.log('Game stats saved successfully', response),
                      error => {
                        console.error('Error saving game stats', error);
                        if (error.status === 401) {
                          this.authService.logout();
                        }
                      }
                    );
                  } else {
                    console.error('Username not found');
                  }
                }
              });
        }
    }
}