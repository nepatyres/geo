import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { ScoreLogic } from "../../shared/score-logic.service";

@Component({
    selector: 'score-popup',
    standalone: true,
    imports: [],
    styleUrl: '../../../styles.css',
    template: `
    <div
    class="flex w-full h-full absolute top-0 left-0 justify-center items-center z-30 transition-transform duration-1000">
     <div class="p-0 m-0 rounded-[15px] relative w-[500px] h-[500px] text-center flex-col flex bg-[#142733]">
        <div class="mt-[18%]">
            <svg (click)="sLogic.scoreClose()"
                class="h-[45px] w-[45px] mr-[12px] mt-[12px] right-0 top-0 absolute rounded-full flex cursor-pointer fill-zinc-400 hover:fill-[#ffffff99] hover:bg-[#182f3d] transition-colors duration-500"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1">
                <path d="M777.856 280.192l-33.92-33.952-231.872 231.872-231.84-231.872-33.984 33.888 231.872 231.904-231.84 231.84 33.888 33.984 231.904-231.904 231.84 231.872 33.952-33.888-231.872-231.904z" />
            </svg>
            <h1 class="text-white inter-regular text-3xl font-bold">{{sLogic.quizTitle}}</h1>
            <div class="grid flex-row justify-between mx-5 inter-regular text-2xl mt-[60px] grid-cols-3 text-[#ffffff99]">
                <div class="flex flex-col gap-[15px]">
                    <span>Score</span>
                    <span class="text-white">{{sLogic.quizScore}}</span>
                </div>
                <div class="flex flex-col gap-[15px]">
                    <span>Attempts</span>
                    <span class="text-white">{{sLogic.quizAttempts}}</span>
                </div>
                <div class="flex flex-col gap-[15px]">
                    <span>Time</span>
                    <span class="text-white">{{sLogic.quizTime}}</span>
                </div>
            </div>
            <button (click)="sLogic.newGame()" class="text-white border border-[#ffffff40] rounded-[30px] py-4 px-12 bg-transparent cursor-pointer mt-20 text-xl raleway transition-colors duration-500 hover:bg-[#182f3d]">New Game</button>
        </div>
     </div>
    </div>`
})

export class ScorePopupComponent {
    constructor(public sLogic: ScoreLogic) { }
}