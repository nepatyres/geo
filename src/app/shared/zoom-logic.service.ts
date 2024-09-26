import { Injectable, NgZone } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZoomLogic {
  private scale = 1;
  private translateX = 0;
  private translateY = 0;
  private isDragging = false;
  private lastX = 0;
  private lastY = 0;
  private svgElement: SVGSVGElement | null = null;
  private wrapperElement: HTMLElement | null = null;

  constructor(
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  initializeZoom(svgElement: SVGSVGElement, wrapperElement: HTMLElement) {
    if (isPlatformBrowser(this.platformId)) {
      this.svgElement = svgElement;
      this.wrapperElement = wrapperElement;
      this.ngZone.runOutsideAngular(() => {
        wrapperElement.addEventListener('wheel', this.handleZoom.bind(this), { passive: false });
        wrapperElement.addEventListener('mousedown', this.handleMouseDown.bind(this));
        document.addEventListener('mousemove', this.handleMouseMove.bind(this));
        document.addEventListener('mouseup', this.handleMouseUp.bind(this));
      });
    }
  }

  private handleZoom(event: WheelEvent) {
    event.preventDefault();
    const zoomIntensity = 0.1;
    const zoomFactor = event.deltaY > 0 ? (1 - zoomIntensity) : (1 + zoomIntensity);
    const newScale = Math.min(Math.max(this.scale * zoomFactor, 1), 3);

    const rect = this.wrapperElement!.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    this.translateX += (x - this.translateX) * (1 - newScale / this.scale);
    this.translateY += (y - this.translateY) * (1 - newScale / this.scale);
    this.scale = newScale;

    this.updateTransform();
  }

  private handleMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.lastX = event.clientX;
    this.lastY = event.clientY;
  }

  private handleMouseMove(event: MouseEvent) {
    if (!this.isDragging) return;
    const dx = event.clientX - this.lastX;
    const dy = event.clientY - this.lastY;
    this.translateX += dx;
    this.translateY += dy;
    this.lastX = event.clientX;
    this.lastY = event.clientY;
    this.updateTransform();
  }

  private handleMouseUp() {
    this.isDragging = false;
  }

  private updateTransform() {
    if (this.svgElement) {
      const transform = `translate(${this.translateX}px, ${this.translateY}px) scale(${this.scale})`;
      this.svgElement.style.transform = transform;
    }
  }
}