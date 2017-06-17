import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'example-content',
    template:`
      <div>
        <h4>ng-content 示例 </h4>
        <div style="background-color: red; padding: 5px; margin: 2px">
          <ng-content select="header"></ng-content>
        </div>
        <div style="background-color: green; padding: 5px; margin: 2px">
          <ng-content select=".class-select"></ng-content>
        </div>
        <div style="background-color: blue; padding: 5px; margin: 2px">
          <ng-content select="[id=id-select]"></ng-content>
        </div>
        <div style="background-color: gray; padding: 5px; margin: 2px">
          <ng-content select="[name=footer]"></ng-content>
        </div>
      </div>
    `
})
export class NgContentExampleComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    console.log("I'm in OnInit.");
  }
}
