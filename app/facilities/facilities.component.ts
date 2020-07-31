import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css'],
})
export class FacilitiesComponent implements OnInit {
  constructor() {}
  facilities = [
    {
      image: '../../assets/3.jpg',
    },
    {
      image: '../../assets/4.jpg',
    },
    {
      image: '../../assets/6.jpg',
    },
    {
      image: '../../assets/7.jpg',
    },
    {
      image: '../../assets/8.jpg',
    },
    {
      image: '../../assets/9.jpg',
    },
    {
      image: '../../assets/10.jpg',
    },
    {
      image: '../../assets/11.jpg',
    },
    {
      image: '../../assets/12.jpg',
    },
  ];
  ngOnInit(): void {}
}
