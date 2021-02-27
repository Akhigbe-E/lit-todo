import {LitElement, html} from 'lit-element';

class TodoItem extends LitElement {
  static get properties() {
    return {
      item: {type: String},
      deleteItem: {type: Function},
    };
  }
  render() {
    return html`
      <div>
        <p>${this.item}</p>
      </div>
    `;
  }
}

customElements.define('todo-item', TodoItem);