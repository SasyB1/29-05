import { Component } from '@angular/core';
import { iMakeup } from '../../interfaces/makeup';
import { MakeupService } from '../../makeup.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  makeupArray: iMakeup[] = [];

  constructor(private makeupSvc: MakeupService) {}

  ngOnInit() {
    this.makeupSvc.getAll().subscribe((trucco) => {
      this.makeupArray = trucco;
      console.log(this.makeupArray);
    });
  }
}
