import {LitElement, html} from 'lit-element';
import './TodoItem.js';

class TodoList extends LitElement {
    static get properties(){
        return {
            list:{type:Array}
        }
    }
  render() {
    return html`
        <ul>
            ${this.list.map((todoItem) => html`<todo-item item=${todoItem}></todo-item>`)}
        </ul>
    `;
  }
}

customElements.define('todo-list', TodoList);