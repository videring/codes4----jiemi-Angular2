import {Component} from '@angular/core';
//import {NgContentExampleComponent} from "./NgContentExampleComponent";
@Component({
  //selector: 'hello-world',
  //templateUrl: 'src/app.component.html'

  selector: 'app',
  templateUrl: 'src/app.component.html'

  // template: `
  //   <example-content>
  //     <header>Header content</header>
  //     <div class="class-select">div with .class-select</div>
  //     <div id="id-select">div with #id-select</div>
  //     <div name="footer">Footer content</div>
  //   </example-content>
  // `
})
export class AppComponent {
  number1 = 1;
  number2 = 2;
  color = 'yellow';
}
