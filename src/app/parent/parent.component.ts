import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  selected?:string="";
  dataFromParent?: number=0;
  temp: string=""
  constructor() { 
    
  }

  ngOnInit(): void {
   
  }
  handle(num:number)
  {
    this.dataFromParent=num;
    this.temp=num+" "+this.selected!

  }
  bracket(t:string)
  {

  }


}
