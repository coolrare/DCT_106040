import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { initDashboard } from './init';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    $(initDashboard);
  }

  goCards(type: number) {
    // this.router.navigateByUrl('/cards/' + type);

    // this.router.navigateByUrl('/cards/' + type + ';key1=Hello;key2=World');
    this.router.navigateByUrl('/cards/' + type + '?key1=Hello&key2=World');
  }

  goCards2(type: number) {
    // this.router.navigate(['/cards', type, {
    //   key1: 'Hello',
    //   key2: 'World'
    // }]);

    this.router.navigate(['/cards', type], {
      queryParams: {
        key1: 'Hello',
        key2: 'World'
      }
    });
  }

}
