import { Component, OnInit } from "@angular/core";
import { ListService } from "./ListService";
@Component({
  selector: 'list',
  template:`
    <ul class="list">
      <li *ngFor="let contact of contacts; trackBy: trackByContacts">
        <list-item [contacting]="contact" (ZSJ)="routerNavigator($event)"></list-item>
      </li>
    </ul>
  `
})

export class ListComponent implements OnInit {
  contacts: Array<any>;
  constructor(listService: ListService) {
    // this.contacts = [
    //   {"id":0, "name":"zousanjun", "telNum":"123456"},
    //   {"id":1, "name":"cuixiaozhi", "telNum":"654321"},
    //   {"id":2, "name":"zhangdejiang", "telNum":"123117"}
    // ];
    this.contacts = listService.conta;
  }

  routerNavigator(event:any){
    for(let x in this.contacts){
      if(this.contacts[x].id == event)
        console.log(this.contacts[x].name)
    }
  }

  trackByContacts(index: number, contact: any) {
    return contact.id;
  }

  ngOnInit() {
    console.log("I'm in OnInit Of ListComponent.");
  }
}
