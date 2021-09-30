import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gabarit-container',
  templateUrl: './gabarit-container.component.html',
  styleUrls: ['./gabarit-container.component.scss'],
})
export class GabaritContainerComponent implements OnInit {
  public title: string;
  constructor() {
    // mock title
    this.title = 'mon titre';
  }

  ngOnInit(): void {}
}
