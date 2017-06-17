import {Injectable} from '@angular/core';
@Injectable()
export class ListService {
  conta: Array<any>;
  constructor() {
    this.conta = [
      {"id":0, "name":"zousanjun", "telNum":"123456"},
      {"id":1, "name":"cuixiaozhi", "telNum":"654321"},
      {"id":2, "name":"zhangdejiang", "telNum":"123117"}
    ]
    // setTimeout(function(){
    //   this.conta = [
    //     {"id":0, "name":"zousanjun", "telNum":"123456"},
    //     {"id":1, "name":"cuixiaozhi", "telNum":"654321"}
    //   ]
    // }, 3000);
  }
}
