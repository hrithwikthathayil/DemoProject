import { LightningElement, track } from 'lwc';
export default class HelloWorld extends LightningElement {
  
  @track todoList=[];

  newlist;

  handleClick(event){
    this.newlist=event.target.value;

  }

  addnewlist(event){
    
    this.todoList.push({
    id: this.todoList.length + 1,
    name: this.newlist,
  });

  this.newlist='';
}

delnewList(event){

    let idDelete = event.target.name;
    let todoList = this.todoList;

    todoList.splice(
      todoList.findIndex(function(todoList) {
          return todoList.id === idDelete;
      })
      , 1
  );

  
}
}