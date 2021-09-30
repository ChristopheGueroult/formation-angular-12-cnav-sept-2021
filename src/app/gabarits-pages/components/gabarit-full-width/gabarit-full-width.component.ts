import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gabarit-full-width',
  templateUrl: './gabarit-full-width.component.html',
  styleUrls: ['./gabarit-full-width.component.scss'],
})
export class GabaritFullWidthComponent implements OnInit {
  @Input() title!: string;
  constructor() {}

  ngOnInit(): void {}
}
