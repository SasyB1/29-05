import { Component, Input } from '@angular/core';
import { iMakeup } from '../../interfaces/makeup';
import { MakeupService } from '../../makeup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() makeUp: iMakeup | null = null;

  constructor(private makeupService: MakeupService, private router: Router) {}

  addToFavorites(makeUp: iMakeup) {
    this.makeupService.addToFavorites(makeUp);
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
