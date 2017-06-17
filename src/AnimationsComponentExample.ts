import {
  Component,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

@Component({
  selector: 'animations-example',
  styles: [
    `button {
      width:  100px;
      height: 20px;
      background-color: #666;
      font-size: 15px;
    }`
  ],
  template: `
    <div>
      <button [@buttonStatus]="status" (click)="toggleStatus()">
        {{status}}
      </button>
    </div>
  `,
  animations: [
    trigger('buttonStatus', [
      state('on', style({
        color: '#0f2',
        transform: 'scale(1.2)'
      })),
      state('off', style({
        color: '#f00',
        transform: 'scale(1)'
      })),
      transition('off => on', animate('100ms ease-in')),
      transition('on => off', animate('100ms ease-out'))
    ])
  ]
})

export class AnimationsComponentExample {
  status: string = 'on';

  toggleStatus(){
    this.status = (this.status === 'on') ? 'off' : 'on';
  }
}
