import {LitElement, html} from 'lit-element';
import './TodoItem.js';

import { style } from "./todo-style";
class TodoList extends LitElement {
    static get properties(){
        return {
            list:{type:Array}
        }
    }
    static get styles() {
        return [style];
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