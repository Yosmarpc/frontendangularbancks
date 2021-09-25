import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'nb-card-colors',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './error.component.html',

})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
