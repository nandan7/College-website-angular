import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clg',
  templateUrl: './clg.component.html',
  styleUrls: ['./clg.component.css'],
})
export class ClgComponent implements OnInit {
  constructor() {}

  showInfo: boolean = false;
  showInfo1: boolean = false;
  showInfo2: boolean = false;
  showInfo3: boolean = false;
  showInfo4: boolean = false;
  ngOnInit(): void {}
  showData(): void {
    if (this.showInfo == false) {
      this.showInfo = true;
    } else {
      this.showInfo = false;
    }
  }
  showData1(): void {
    if (this.showInfo1 == false) {
      this.showInfo1 = true;
    } else {
      this.showInfo1 = false;
    }
  }
  showData2(): void {
    if (this.showInfo2 == false) {
      this.showInfo2 = true;
    } else {
      this.showInfo2 = false;
    }
  }
  showData3(): void {
    if (this.showInfo3 == false) {
      this.showInfo3 = true;
    } else {
      this.showInfo3 = false;
    }
  }
  showData4(): void {
    if (this.showInfo4 == false) {
      this.showInfo4 = true;
    } else {
      this.showInfo4 = false;
    }
  }
}
