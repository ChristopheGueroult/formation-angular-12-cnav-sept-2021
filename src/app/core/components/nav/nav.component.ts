import { Component, OnInit } from '@angular/core';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  public version!: number;
  constructor(private versionServ: VersionService) {
    this.versionServ.numVersion.subscribe((data) => {
      this.version = data;
    });
  }

  ngOnInit(): void {}
  increment(): void {
    this.versionServ.increment();
  }
}
