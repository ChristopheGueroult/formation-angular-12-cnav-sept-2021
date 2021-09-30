import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gabarit-full-width',
  templateUrl: './gabarit-full-width.component.html',
  styleUrls: ['./gabarit-full-width.component.scss'],
})
export class GabaritFullWidthComponent implements OnInit {
  public title: string;
  constructor() {
    this.title = 'un super titre';
  }

  ngOnInit(): void {}
}
