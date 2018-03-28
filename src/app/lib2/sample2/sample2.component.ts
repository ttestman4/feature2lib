import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'lib2-sample2',
  templateUrl: './sample2.component.html',
  styleUrls: ['./sample2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Sample2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
