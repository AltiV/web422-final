import { Component, OnInit } from '@angular/core';
import { PositionService } from './data/position.service';
import { ActivatedRoute } from '@angular/router';
import { Position } from './data/position'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {

  // Fields
  paramSubscription: any;
  positionSubscription: any;
  savePositionSubscription: any;
  position: Position;
  successMessage: boolean = false;
  failMessage: boolean = false;

  constructor(private posService: PositionService, private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.paramSubscription = this.actRoute.params.subscribe((params) => {

      // Populate "position" property
      this.positionSubscription = this.posService.getPosition(params['_id']).subscribe((pos) => {
        this.position = pos[0];
      });
    });
  }

  onSubmit(f: NgForm) {
    this.savePositionSubscription = this.posService.savePosition(this.position).subscribe(() => {
      // First callback (success)
      this.successMessage = true;

      setTimeout(() => { this.successMessage = false; }, 2500);
    },
      () => {
        // Second callback (failure)
        this.failMessage = true;

        setTimeout(() => { this.failMessage = false; }, 2500);
      });
  }

  ngOnDestroy() {
    if (this.paramSubscription) { this.paramSubscription.unsubscribe(); }
    if (this.positionSubscription) { this.positionSubscription.unsubscribe(); }
    if (this.savePositionSubscription) { this.savePositionSubscription.unsubscribe(); }
  }
}
