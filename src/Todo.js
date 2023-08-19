
import './todo.css'
import React, { Component } from 'react'

export default class Todo extends Component {
   state={
    flag:null,
   }
    dataEntry=()=>{
       
       var input= document.getElementById('new-task').value;
       console.log(input);
       var listitem=`<input type="checkbox" class="checkbox"/><label>${input}</label><input type="text"/><button class="edit" >Edit</button><button class="delete">Delete</button>`
    
       var list=document.createElement("li");     
       list.innerHTML=listitem;
       console.log(list);
       document.getElementById("incomplete-tasks").append(list);
       document.getElementById('new-task').value = "";

       if(this.state.flag != null){    // to remove the value
        this.state.flag.remove();
        this.setState({
           flag:null,
        }) 
    }
    document.getElementById("addBtn").innerHTML="Add";
    }

     editAndDel=(event)=>{
        var click=event.target;
       
       if(click.className=="edit"){
        var data=click.parentNode.querySelector("label").innerHTML;
        document.getElementById("new-task").value=data;
        document.getElementById("addBtn").innerHTML="Update";
        this.setState({
            flag:event.target.parentNode,
        })      
       } 
       else if(click.className=="delete"){
        click.parentNode.remove(); //to remove the parent node
        document.getElementById("addBtn").innerHTML="Add";
        document.getElementById('new-task').value = "";
       }
    //    console.log("class: "+click.className);
       else if(click.className=="checkbox"){
        
        if(click.checked === true){
            console.log("checked");
            var compTask=document.getElementById("completed-tasks");
            var select=click.parentNode.querySelector("label").innerHTML;
            var li=document.createElement("li");
            li.innerHTML=`<input type="checkbox" class="checkbox" checked><label>${select}</label><input type="text"><button class="edit">Edit</button><button class="delete">Delete</button>`;
            compTask.appendChild(li);
            click.parentNode.remove();
           // console.log();
        }
       else{
            console.log("unched");
            var incompTask=document.getElementById("incomplete-tasks");
            let select=click.parentNode.querySelector("label").innerHTML;
            var li=document.createElement("li");
            li.innerHTML=`<input type="checkbox" class='checkbox' ><label>${select}</label><input type="text"><button class="edit">Edit</button><button class="delete">Delete</button>`;
            document.getElementById('incomplete-tasks').appendChild(li);
            click.parentNode.remove();
    }
}
     }
 render() {
    return (
      <div>
          
          <div className="container">
            <h2>TODO LIST</h2>
            <h3>Add Item</h3>
            <p>
                <input id="new-task" type="text"/>
                <button id='addBtn' className="update" onClick={this.dataEntry}>Add</button>
            </p>
    
            <h3>Todo</h3>
            <ul id="incomplete-tasks"onClick={this.editAndDel}>
                <li><input type="checkbox" className="checkbox"/><label>Pay Bills</label><input type="text"/><button className="edit" >Edit</button><button className="delete">Delete</button></li>
                <li><input type="checkbox" className="checkbox"/><label>Go Shopping</label><input type="text" value="Go Shopping"/><button className="edit">Edit</button><button className="delete">Delete</button></li>

            </ul>
    
            <h3>Completed</h3>
            <ul id="completed-tasks" onClick={this.editAndDel}>
                <li><input type="checkbox" className="checkbox" defaultChecked/><label>See the Doctor</label><input type="text"/><button className="edit">Edit</button><button className="delete">Delete</button></li>
            </ul>
        </div>

      </div>
    )
  }
}

