import { Component, OnInit, NgZone } from '@angular/core';
import { FlotCharts } from './init';

@Component({
  selector: 'app-flot',
  templateUrl: './flot.component.html',
  styleUrls: ['./flot.component.css']
})
export class FlotComponent implements OnInit {
  constructor(private zone: NgZone) {}

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      $(FlotCharts);
    });
  }

  debug() {
    console.log(new Date());
  }
}
