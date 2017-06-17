import { Component } from "@angular/core";

@Component({
  selector:'pipe-demo',
  template:`
    <p> My birthday is {{ birthday | date: "y/MM/dd EEEE/jj hh/mm/ss" }} </p>
    <pre>{{jsonObj | json}}</pre>
    <p>{{jsonObj.foo | json}}</p>
    <p>AbCd {{"AbCd" | lowercase}}</p>
    <p>AbCd {{"AbCd" | uppercase}}</p>
    <p>2.7123412 {{2.7123412 | number:'3.4-6'}}</p>
    <p>1232 {{1232 | number:'3.4-6'}}</p>
    <p>0.258 {{ 0.258 | currency: 'CNY': false: '1.2-4' }}</p>
    <p>120.25821 {{ 120.25821 | currency: 'USD': true: '1.2-4' }}</p>
    <p>0.259 {{ 0.259 | percent }}</p>
    <p>123.259 {{ 123.259 | percent: '4.3-5' }}</p>
    <p>abcdef {{ "abcdef" | slice: 3 :5 }}</p>
    <p>abcdef {{ "abcdef" | slice: 3 }}</p>
    <p>jsonObj.foo {{ jsonObj && jsonObj.foo}}</p>
    <p>jsonObj?.foo {{ jsonObj?.foo}}</p>
    <p>jsonObjX?.foo {{ jsonObjX?.foo}}</p>
  `
})

export class PipeComponent {

  birthday = new Date();

  jsonObj: Object = {'foo': 'bai', baz:'qux', nested: {xyz: 3, numbers: [1,2]}}
}
