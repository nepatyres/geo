import { CommonModule } from '@angular/common'
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core'
import { GameLogic } from '../../shared/game-logic.service'

@Component({
    selector: 'game',
    standalone: true,
    imports: [CommonModule],
    styleUrl: '../../../styles.css',
    template: `
    <div class="flex justify-center items-center h-full w-full">
     <span class="inter-regular text-[22px] sm:text-[25px] lg:text-[30px] xl:text-[40px] leading-tight text-white justify-center text-center">{{gLogic.displayCountryName}}
     </span>
     <button (click)="gLogic.skipBtn()" class="bg-transparent border-none cursor-pointer p-0 m-0 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
            class="fill-white w-5 h-5 ml-2.5 mt-1 sm:mt-1.5 xl:mt-3" viewBox="0 0 309.143 309.143" xml:space="preserve">
            <path d="M240.481,149.268L93.41,2.197c-2.929-2.929-7.678-2.929-10.606,0L68.661,16.34  c-1.407,1.406-2.197,3.314-2.197,5.303c0,1.989,0.79,3.897,2.197,5.303l127.626,127.625L68.661,282.197  c-1.407,1.406-2.197,3.314-2.197,5.303c0,1.989,0.79,3.897,2.197,5.303l14.143,14.143c1.464,1.464,3.384,2.197,5.303,2.197  c1.919,0,3.839-0.732,5.303-2.197l147.071-147.071C243.411,156.946,243.411,152.197,240.481,149.268z" />
        </svg>
     </button>
    </div>`
})

export class GameComponent  {
    constructor(public gLogic: GameLogic) { }
}