import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-celcius',
  templateUrl: './celcius.component.html',
  styleUrls: ['./celcius.component.scss']
})
export class CelciusComponent implements OnInit {
  input:Number;

  constructor() { }

  ngOnInit(): void {
  }

}