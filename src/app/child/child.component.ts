import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input()
  selectedData?="";
  @Output()
  notify:EventEmitter<number> =new EventEmitter<number>();
 
  students: Array<Student> = [
    {
      "id":1,
      "name":"ravi",
      "gender":"Male",
      "result":"Pass"
    },
    {
      "id":2,
      "name":"raju",
      "gender":"Male",
      "result":"Fail"
    },
    {
      "id":3,
      "name":"swathi",
      "gender":"Female",
      "result":"Pass"
    },
    {
      "id":4,
      "name":"suresh",
      "gender":"Male",
      "result":"Pass"
    },
  ];
  list:Array<Student>=[];
  constructor() { 
   this.list=this.students
  }

  ngOnInit(): void {
  }
  getResult(){
    if(this.selectedData!="All"){
    this.list=this.students.filter((x)=>x.result==this.selectedData)
    }
    else{
      this.list=this.students;
    }
    this.notify.emit(this.list.length)

  }

}
