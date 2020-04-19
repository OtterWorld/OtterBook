import { Component } from '@angular/core';



@Component({
  selector: 'welcome-page',
  template: `
  <div class='container'>
  <h1> Welcome Bro </h1>
  </div>
  `,
  styles: [
     '.container { padding: 1rem; margin: auto; display: flex; justify-content: center }'
  ]
})
export class WelcomeComponent {
  constructor() {}


}
