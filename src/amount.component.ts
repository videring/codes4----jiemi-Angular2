import { Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
  selector:"amount",
  template:`
    <span>
      子组件当前值：{{ value }} -
      <button (click)="increment()">增加</button>
    </span>
  `
})

export class AmountComponent{
  @Input() value: number = 0;
  @Output() valueChange: EventEmitter<number> = new EventEmitter<number>();

  increment() {
    this.value++;
    this.valueChange.emit(this.value);
  }
}
