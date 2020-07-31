import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admissions',
  templateUrl: './admissions.component.html',
  styleUrls: ['./admissions.component.css'],
})
export class AdmissionsComponent implements OnInit {
  showInfo1: boolean = false;
  showInfo2: boolean = false;
  showInfo3: boolean = false;
  showInfo4: boolean = false;
  constructor() {}

  ngOnInit(): void {}
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
