import {LitElement, html} from 'lit-element';
import './TodoInput.js'
import './TodoList.js'

class TodoElement extends LitElement {
    static get properties(){
        return {
            list:{type:Array},
            todo:{type:String}
        }
    }
    constructor() {
        super();
        this.list = JSON.parse(localStorage.getItem('litTodoList')) || [];
        this.todo = '';
    }

    handleKeyPress(e) {
        if (e.target.value !== '' && e.key === 'Enter') {
            this.createNewToDoItem();
        }
    }

    handleInput(e) {
        this.todo = e.target.value;
    }

    createNewToDoItem(){
        const todoList = JSON.parse(localStorage.getItem('litTodoList')) || []
        todoList.push(this.todo)
        this.list = todoList
        localStorage.setItem('litTodoList', JSON.stringify(todoList))
        this.todo = ""
    }
    
    render() {
        return html`
            <div style={display:inline-block, margin: 0 auto}>
                <h1>😎 Lit Todo</h1>

                <todo-input
                  todo=${this.todo}
                 .onInput=${this.handleInput.bind(this)}
                 .onKeyPress=${this.handleKeyPress.bind(this)}
                 .createNewToDoItem=${this.createNewToDoItem.bind(this)}
                ></todo-input>

                <todo-list .list=${this.list}></todo-list>
            </div>
        `;
    }
}

customElements.define('todo-element', TodoElement);