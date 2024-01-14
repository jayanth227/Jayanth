import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eb1',
  templateUrl: './eb1.component.html',
  styleUrls: ['./eb1.component.css']
})
export class Eb1Component implements OnInit {

  msg:string="";
  num1:number=0
  num2:number=0
  res:number=0
  sname:string=""
  fun(funname:string)
  {
    if(funname=="add")
    {
      this.res=this.num1+this.num2
    }
    else if(funname=="sub")
    {
      this.res=this.num1-this.num2;
    }
    else{
      if(this.num1>this.num2)
      {
        this.res=this.num1;
      }
      else{
        this.res=this.num2;
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
