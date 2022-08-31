import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/models/Todo';
@Component({
        selector: 'app-todo',
        templateUrl: './todo.component.html',
        styleUrls: ['./todo.component.scss']
          })


export class TodoComponent implements OnInit {
    todos : Todo[];
    todoValue :string ="";

    valueToUpdate:string=""



      constructor() { }







      ngOnInit(): void  //se executa ca useeffect 
      {   this.todos=
            [   { id: 1,
          content : 'Go for a run',  completed :false,    date: "10:00 11.03.2022"  ,TrueorFalseToUpdate :true },
          { id: 2, content : 'Go for a buy',completed :true, date: "10:00 11.07.2022" ,TrueorFalseToUpdate :true }
            ,{ id: 3,content : 'Go for a cooking',completed :false,date: "12:00 11.06.2022",TrueorFalseToUpdate :true }    ]
       }
      

      
       complete(id:number):void 
        {
          
          this.todos =  this.todos.map(todo=> 
                  {
                                      //returneaza un opus  cand facem click
                if(todo.id===id) {todo.completed = !todo.completed}
                  return todo;
                  }                  ) 
                    console.log( this.todos ); 
      } 


      Edit(id:number):void {


                

this.todos =  this.todos.map(todo=> 
  {                    //returneaza un opus  cand facem click
  if(todo.id===id) {  this.valueToUpdate=todo.content;      todo.TrueorFalseToUpdate = !todo.TrueorFalseToUpdate   }
                return todo;
    }
          )










      }


    Update(id:number):void 
    { 

    var newContent:any = this.valueToUpdate
    //prompt-ul poate returna si null de asta trabue de pus var  si any
    this.todos =  this.todos.map(todo=> 
      {                    //returneaza un opus  cand facem click
      if(todo.id===id) {todo.content = String(newContent) , todo.TrueorFalseToUpdate = !todo.TrueorFalseToUpdate }
                    return todo;
        }
              )

              this.valueToUpdate=""
    }




 delete (id:number) :void {this.todos=this.todos.filter(todo=>todo.id !== id)}

    addTodo() {  this.todos.push(
                { //pentru id se mai poate si id: '' + Math.random().toString(36).substr(2,9)
              id: new Date().getDate()+Math.random(),
              content: this.todoValue,
              completed : false,
              TrueorFalseToUpdate : true,
              date: new Date().toLocaleString(),
          
              }
      )
      this.todoValue="" // ca sa anulam valoare din input !
    }
}