import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { PopupLogic } from '../../shared/popup-logic.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './home.component.html',
  styleUrls: ['../../../styles.css']
})
export class HomeComponent {
  constructor(public pLogic: PopupLogic){}
}
