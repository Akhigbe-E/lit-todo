import {LitElement, html} from 'lit-element';

class TodoInput extends LitElement {
  static get properties() {
    return {
      todo: {type: String},
      onInput: {type: Function},
      onKeyPress: {type: Function},
      createNewToDoItem: {type: Function},
    };
  }
  render() {
    return html`
    <div>
        <input
            type="text"
            .value=${this.todo}
            @input=${this.onInput}
            @keypress=${this.onKeyPress}
        />
        <button
            @click=${this.createNewToDoItem}
        >Add</button>
    </div>
    `;
  }
}

customElements.define('todo-input', TodoInput);