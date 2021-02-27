import {LitElement, html} from 'lit-element';
import { style } from "./todo-style";

class TodoInput extends LitElement {
  static get properties() {
    return {
      todo: {type: String},
      onInput: {type: Function},
      onKeyPress: {type: Function},
      createNewToDoItem: {type: Function},
    };
  }
  static get styles() {
      return [style];
  }
  render() {
    return html`
    <div class="todo-input">
        <input
            type="text"
            .value=${this.todo}
            @input=${this.onInput}
            @keypress=${this.onKeyPress}
        />
        <button
          class="todo-button"
          @click=${this.createNewToDoItem}
        >Add</button>
    </div>
    `;
  }
}

customElements.define('todo-input', TodoInput);