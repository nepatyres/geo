import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { TimerLogic } from '../../shared/timer-logic.service';

@Component({
    selector: 'timer',
    standalone: true,
    imports: [CommonModule],
    styleUrl: '../../../styles.css',
    template: `
    <div class="main-timer flex flex-row justify-start my-2.5 items-center">
     <button class="bg-transparent border-none cursor-pointer">
        <svg *ngIf="tLogic.pause" (click)="tLogic.pauseBtn()" style="enable-background:new 0 0 512 512;" version="1.1"
            viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" class="bg-transparent w-[30px] h-[30px] fill-white border-none align-middle">
            <g>
                <path d="M224,435.8V76.1c0-6.7-5.4-12.1-12.2-12.1h-71.6c-6.8,0-12.2,5.4-12.2,12.1v359.7c0,6.7,5.4,12.2,12.2,12.2h71.6   C218.6,448,224,442.6,224,435.8z" />
                <path d="M371.8,64h-71.6c-6.7,0-12.2,5.4-12.2,12.1v359.7c0,6.7,5.4,12.2,12.2,12.2h71.6c6.7,0,12.2-5.4,12.2-12.2V76.1   C384,69.4,378.6,64,371.8,64z" />
            </g>
        </svg>
        <svg *ngIf="!tLogic.pause" (click)="tLogic.wrapperBtn()" style="enable-background:new 0 0 512 512;" version="1.1"
            viewBox="0 0 512 512" class="bg-transparent w-[30px] h-[30px] fill-white border-none align-middle" xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <path d="M405.2,232.9L126.8,67.2c-3.4-2-6.9-3.2-10.9-3.2c-10.9,0-19.8,9-19.8,20H96v344h0.1c0,11,8.9,20,19.8,20  c4.1,0,7.5-1.4,11.2-3.4l278.1-165.5c6.6-5.5,10.8-13.8,10.8-23.1C416,246.7,411.8,238.5,405.2,232.9z" />
        </svg>
     </button>
     <div class="text-white text-[30px] inter-regular w-[100px] ml-1.5">{{tLogic.timer}}</div>
    </div>`
})

export class TimerComponent {
    constructor(public tLogic: TimerLogic) { }
}