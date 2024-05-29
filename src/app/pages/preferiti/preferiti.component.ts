import { Component } from '@angular/core';
import { MakeupService } from '../../makeup.service';
import { iMakeup } from '../../interfaces/makeup';

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrl: './preferiti.component.scss',
})
export class PreferitiComponent {
  preferiti: iMakeup[] | undefined;

  constructor(private makeupSvc: MakeupService) {}

  ngOnInit(): void {
    this.preferiti = this.makeupSvc.getFavorites();
  }
}
