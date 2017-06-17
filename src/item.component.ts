import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'list-item',
  template:`
    <div class="contact-info">
      <span [ngStyle]="setIdStyle()">{{ contacting.id }}</span>
      <!-- <span [ngClass]="setNameClass()"  (click)="goDetail(contacting.id)">{{ contacting.name }}</span> -->
      <span [ngClass]="setNameClass()"  (click)="goDetail(contacting.id)" [ngSwitch]="contacting.name">
        <span *ngSwitchCase="'zousanjun'">邹三军</span>
        <span *ngSwitchCase="cuixiaozhi">崔晓志</span>
        <span *ngSwitchDefault>无名氏</span>
      </span>
      <span class="contactTel">{{ contacting.telNum }}</span>
      <span *ngIf="true">testing</span>
    </div>
  `
})

export class ListItemComponent implements OnInit{
  constructor() {}
  @Input() contacting:any = {};
  @Output('ZSJ') routerNavigate = new EventEmitter<number>();
  goDetail(num: number){
    this.routerNavigate.emit(num);
  }
  contactName = true;
  setNameClass() {
    let classes = {
        'contactName': this.contactName
    };
    return classes;
  }
  setIdStyle() {
    let styles = {
      'font-size': '25px',
      'font-weight':'bold',
      'color':'blue'
    };
    return styles;
  }
  ngOnInit() {
    console.log("I'm in OnInit Of ListItemComponent.");
  }
}
