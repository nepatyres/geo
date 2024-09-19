import { Component } from '@angular/core';
import { CountriesNavComponent } from '../../shared/countriesNav/countries-nav.component';

@Component({
  selector: 'app-africa',
  standalone: true,
  imports: [CountriesNavComponent],
  templateUrl: './africa.component.html',
  styleUrl: '../../../styles.css'
})
export class AfricaComponent {
  wrapper(): void {
console.log('clicked')
  }
}
