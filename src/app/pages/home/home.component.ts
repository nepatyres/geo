import { Component } from '@angular/core';
import { BtnsComponent } from '../../components/btns/btns.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BtnsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['../../../styles.css']
})
export class HomeComponent {
  title = 'geoquiz';
}
