import { ElementRef, Injectable } from '@angular/core';
import { Africa, Americas, Asia, Europe, World } from '../constants/countries';

@Injectable({
    providedIn: 'root'
})

export class GameLogic {
    private countryName: ElementRef | null = null
    game: boolean = true
    statsPopup = false
    gameStarted: boolean = false
    continent: string[] = ['']
    continentAtStart: string[] = ['']
    countriesCount: number = 0
    countriesCountAtStart: number = 0
    score: number = 0
    attempts: number = 0

    setCountryNameElement(element: ElementRef) {
        this.countryName = element
    }

    random() {
        return Math.floor(Math.random() * this.continent.length)
    }

    wrapperBtn(con: string) {
        if (!this.gameStarted) {
            this.gameStarted = true
            this.continent =
                con === 'Africa' ? Africa :
                    con === 'Americas' ? Americas :
                        con === 'Asia' ? Asia :
                            con === 'Europe' ? Europe : World
            this.countriesCount = this.continent.length
            this.countriesCountAtStart = this.continent.length
            this.continentAtStart = this.continent
            if (this.countryName) {
                this.countryName.nativeElement.textContent = this.continent[this.random()]
            }
        } else {
            this.round()
        }
    }

    round(event: MouseEvent | null = null) {
        if (this.gameStarted && event && this.countryName) {
            const clickedCountry = (event.target as HTMLElement).id
            const country = (event.target as HTMLElement)
            const countryName = this.countryName.nativeElement.textContent.trim();
            const tspanElement = document.getElementById(`${clickedCountry}-tspan`);
            if (clickedCountry === countryName) {
                country.style.fill = 'rgba(20,39,51,0.8)'
                tspanElement?.classList.remove('hidden')
                setTimeout(() => {
                    tspanElement?.classList.add('hidden')
                }, 1000)
                this.score++
                this.nextRound()
            } else if (clickedCountry && countryName && this.continent.includes(clickedCountry)) {
                country.style.fill = 'rgba(155, 1, 1,0.8)'
                country.style.transition = 'fill 0.2s ease'
                if (tspanElement) {
                    tspanElement.classList.remove('hidden')
                    setTimeout(() => {
                        country.style.fill = ''
                        tspanElement.classList.add('hidden')
                    }, 700)
                }
                this.attempts++
            }
        }
    }

    skipBtn() {
        const countryName = this.countryName?.nativeElement.textContent
        const correctCountry = document.getElementById(countryName)
        if (this.countryName && this.gameStarted && this.countriesCount > 0) {
            const tspanElement = document.getElementById(`${countryName}-tspan`)
            tspanElement?.classList.remove('hidden')
            correctCountry?.style?.setProperty('fill', 'rgba(20,39,51,0.8)')
            setTimeout(() => {
                tspanElement?.classList.add('hidden')
            }, 1000)
            this.nextRound()
        } else {
            this.gameEnd()
        }
    }

    nextRound() {
        if (this.gameStarted && this.countryName && this.countriesCount > 0) {
            const skipCountry = this.countryName.nativeElement.textContent
            this.continent = this.continent.filter(country => country !== skipCountry)
            this.countriesCount--
            this.countryName.nativeElement.textContent = this.continent[this.random()]
        } else {
            this.gameEnd()
        }
    }

    gameEnd() {
        if (this.gameStarted) {
            console.log('game end')
            this.gameStarted = false
            this.game = false
            for (let i = 0; i <= this.countriesCountAtStart; i++) {
                const tspanElement = document.getElementById(`${this.continentAtStart[i]}-tspan`)
                tspanElement?.classList.remove('hidden')
            }
        }
    }
}