import { Component, OnInit } from '@angular/core';
import { Position } from './data/position';
import { PositionService } from './data/position.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {

  positions: Position[];
  getPositionsSub: any;
  loadingError: boolean = false;

  constructor(private positionService: PositionService, private router: Router) { }

  ngOnInit() {
    this.getPositionsSub = this.positionService.getPositions().subscribe((positions) => {
      this.positions = positions.sort(((a, b) => { return a.PositionName.localeCompare(b.PositionName) }));
    }, () => {
      this.loadingError = true;
    })
  }

  routePosition(id: string) {
    this.router.navigate(['/position', id]);
  }

  ngOnDestroy() {
    this.getPositionsSub.unsubscribe();
  }
}