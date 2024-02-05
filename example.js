

export default class MyComponent extends HTMLElement {
  
    constructor(json) {
      // Always call super first in constructor
      super();
      console.log("Constructor Function Called");
      let template = document.getElementById("my-paragraph");
      let templateContent = template.content;

      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(templateContent.cloneNode(true));
    }
  
    connectedCallback() {
      console.log('this: ', this.shadowRoot)
      console.log("Custom element added to page.");
      console.log("let's get come quiz questions");

      //https://raw.githubusercontent.com/mattwilliams/mattwilliams.github.io/master/data.json
      fetch('https://raw.githubusercontent.com/mattwilliams/mattwilliams.github.io/master/data.json')
        .then(response => response.json())
        .then( data => {
          console.log("An array of data: " , data)

          let div = document.createElement( "div" )
          div.textContent = "the rain in spain"
          this.appendChild( div )

        })
        .catch((error) => console.error('Error:', error));
    }
  
    disconnectedCallback() {
      console.log("Custom element removed from page.");
    }
  
    adoptedCallback() {
      console.log("Custom element moved to new page.");
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      console.log(`Attribute ${name} has changed.`);
    }
  }
  

  
