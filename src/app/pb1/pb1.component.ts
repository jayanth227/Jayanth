import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pb1',
  templateUrl: './pb1.component.html',
  styleUrls: ['./pb1.component.css']
})
export class Pb1Component implements OnInit {
amount:number=0;
msg:string="";
isWorkingHours:boolean=false;
getMessage()
{
 this.msg=`${this.amount},succesfull` ;
}
  constructor() { 
    var hour=new Date().getHours();
    if(hour>=11 && hour<=17 )
    {
      this.isWorkingHours=true;
    }
  }

  ngOnInit(): void {
  }

}
