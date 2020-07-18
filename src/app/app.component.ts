import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {  }
  title = 'converter';
  value:any;c:any;f:any;
  result:any;
  event(event:any){
    this.value=event.target.value
    this.c=this.value
    this.f=(this.c)*(9/5)+32
  }
  eventf(events:any){
    this.value=events.target.value
    this.f=this.value;
    this.c=((this.f)-32)*(5/9)
  }

}
