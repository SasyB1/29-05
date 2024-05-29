import { Component } from '@angular/core';
import { iMakeup } from '../../interfaces/makeup';
import { ActivatedRoute } from '@angular/router';
import { MakeupService } from '../../makeup.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  currentMakeUp!: iMakeup;
  constructor(
    private route: ActivatedRoute,
    private MakeupSvc: MakeupService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.MakeupSvc.getById(params.id).subscribe((MakeupCurrent: iMakeup) => {
        if (MakeupCurrent) {
          this.currentMakeUp = MakeupCurrent;
        }
      });
    });
  }
}
