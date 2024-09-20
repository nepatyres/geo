import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PopupLogic {
  toggler: boolean = false
  login: boolean = false
  register: boolean = false

  loginBtn(): void {
    this.login = true
  }

  loginClose(): void {
    this.login = false
  }

  registerBtn(): void {
    this.register = true
  }

  registerBack(): void {
    this.register = false;
  }

  registerClose(): void {
    this.register = false;
    this.login = false;
  }

  togglerBtn(): void {
    this.toggler = true
  }

  togglerClose(): void {
    this.toggler = false
  }
}