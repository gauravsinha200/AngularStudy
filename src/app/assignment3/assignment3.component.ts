import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {

  constructor() { }

  secretVisible=true;
  
  clicks: number[] = [];
  inc:number=1;
  ngOnInit(): void {
  }

  onDisplayDetails()  {
    this.secretVisible=!this.secretVisible;
    //let date=new Date();
    this.clicks.push(this.inc);
    this.inc++;

  }
  getVisibility()
  {
    return this.secretVisible=== false ? 'visible':'hidden';
  }

  getBackground(){
    if(this.inc > 4)
    return 'blue';
    else return 'black';
  }

}
