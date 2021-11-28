import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  task:string=""
  tasksadd:any[]=[]
  addTask(){
    return this.tasksadd.push({
      name:this.task,
      done:false
    })
  }
  constructor() { }
  taskDone(index:number){
  // this.tasksadd.map((v,i)=>{
  //   if(i===index) v.done=!v.done;
  //   console.log(v.done)
  // })
  this.tasksadd[index].done=!this.tasksadd[index].done
  }
  RemoveItem(element:string){
    this.tasksadd.forEach((value, index)=>{
      if(value===element) this.tasksadd.splice(index,1)
    })
  }

  ngOnInit(): void {
  }

}
