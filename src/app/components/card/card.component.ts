import { Component, Input } from '@angular/core';
import { iMakeup } from '../../interfaces/makeup';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() makeUp: iMakeup | null = null;
}
