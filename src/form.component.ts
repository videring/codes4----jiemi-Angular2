import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { validateUserName } from "./validate-username"

@Component({
  selector: 'formX',
  template: `
    <input type="radio" name="sex" [(ngModel)]="curContact.sex" value="female" (blur)="clickContact()"/>女
    <input type="radio" name="sex" [(ngModel)]="curContact.sex" value="male" (blur)="clickContact()"/>男
    <input type="checkbox" name="lock" [(ngModel)] = "curContact.lock" (blur)="clickLock()"/> 禁用

    <select name="interestValue" [(ngModel)]="curContact.interestValue" (blur)="clickInterestValue()">
     <option *ngFor="let interest of interests" [value]="interest.valueX">
      {{interest.display}}
     </option>
    </select>

    <select name="interestObj" [(ngModel)]="curContact.interestObj" (blur)="clickInterestObj()">
     <option *ngFor="let interest of interests" [ngValue]="interest">
      {{interest.display}}
     </option>
    </select>

    <select multiple size="3" name="interestMul" [(ngModel)]="curContact.interestMul" (blur)="clickInterestMul()">
     <option *ngFor="let interest of interests" [value]="interest.valueX">
      {{interest.display}}
     </option>
    </select>

    <div>
      <li>
        <label for="contactName">姓名：</label>
        <input type="text" #contactNames name="contactName" id="contactName" (input)="onContactNames()"/>
        <label for="telNum">电话：</label>
        <input type="number" ref-telNums name="telNum" id="telNum" (input)="onContactNames()"/>
        <p>{{contactNames.value}} -- {{telNums.value}}</p>
      </li>
    </div>

    <div>
      <form #contactedForm="ngForm" (ngSubmit)="doSubmit(contactedForm.value)" class="form-group-2">
        <ul>
          <li>
            <label for="contactedName">姓名：</label>
            <input required="required" type="text" minlength=1 maxlength=10 pattern="a{3}" name="contactedName" id="contactedName" [(ngModel)]="curContact.name" #contactedName="ngModel"/>
            <p [hidden]="contactedName.valid || contactedName.pristine">姓名长度为1~10个字符</p>
            <label for="contactedTelNum">电话：</label>
            <input type="number" name="contactedTelNum" id="contactedTelNum" [(ngModel)]="curContact.telNum" #contactedTelNum="ngModel" (blur)="onContactedNames($event)"/>
            <input type="submit" value="提交" [disabled]="!contactedName.valid"/>
            <button type="submit" value="提交" [disabled]="!contactedName.valid">Submit</button>
            <button type="reset" value="重置">Reset</button>
          </li>
        </ul>
      </form>
      <p>{{contactedForm.value.contactedName}} -- {{contactedForm.value.contactedTelNum}}</p>
      <p>valid: {{contactedName.valid}}</p>
      <p>pristine: {{contactedName.pristine}}</p>
      <p>dirty: {{contactedName.dirty}}</p>
      <p>touched: {{contactedName.touched}}</p>
      <p>untouched: {{contactedName.untouched}}</p>
    </div>

    <div>
      <form #newContactedForm="ngForm">
        <fieldSet ngModelGroup="nameGroup" #nameGroup="ngModelGroup">
            <label for="newContactedFirstname">姓氏：</label>
            <input required="required" type="text" name="firstname" id="newContactedFirstname" [(ngModel)]="curContact.firstname" #contactedFirstname="ngModel"/>
            <label for="newContactedLastname">名字：</label>
            <input type="text" name="lastname" id="newContactedLastname" [(ngModel)]="curContact.lastname" #contactedLastname="ngModel" />
        </fieldSet>
        <fieldSet ngModelGroup="addressGroup" #addressGroup="ngModelGroup">
            <label for="newContactedStreet">街道：</label>
            <input required="required" type="text" name="street" id="newContactedStreet" [(ngModel)]="curContact.street" #contactedStreet="ngModel"/>
            <label for="newContactedCity">城市：</label>
            <input type="text" name="city" id="newContactedCity" [(ngModel)]="curContact.city" #contactedCity="ngModel" />
        </fieldSet>

        <input type="submit" value="SUBMIT" />
      </form>
       <!-- <p>{{newContactedForm.value.nameGroup.firstName}} {{newContactedForm.value.nameGroup.lastname}} 在 {{newContactedForm.value.addressGroup.city}} {{newContactedForm.value.addressGroup.street}}</p> -->
      <p>{{newContactedForm.value.nameGroup | json}} </p>
      <p>nameGroup-valid: {{nameGroup.valid}}</p>
      <p>valid: {{contactedFirstname.valid}}</p>
      <p>pristine: {{contactedFirstname.pristine}}</p>
      <p>dirty: {{contactedFirstname.dirty}}</p>
      <p>touched: {{contactedFirstname.touched}}</p>
      <p>untouched: {{contactedFirstname.untouched}}</p>
    </div>

    <p style="font-weight:bold;color:green">-----------------------------------<br/>以上是模板表单，以下是模型表单<br/>-----------------------------------</p>
    <div>
      <form [formGroup]="customForm">
        <label>姓名：</label>
        <input type="text" formControlName="customName" />
        <input type="submit" value="SUBMIT" />
      </form>
    </div>

    <p style="font-weight:bold;color:green">-----------------------------------<br/>ngModel原理-NgModel指令<br/><br/>ngModel与ngModelChange<br/>-----------------------------------</p>
    
  `
})

export class FormComponent {
  curContact = {
    sex:"male",
    telNum:1234567,
    name:"邹天得",
    firstname:"邹",
    lastname:"三军",
    street:"民治街道",
    city:"深圳市龙华新区",
    lock:true,
    interestValue:"traveling",
    interestObj:{valueX: 'sport', display:'运动'},
    interestMul:"sport"
  };
  clickContact(){
    alert(this.curContact.sex);
  }
  clickLock(){
    alert(this.curContact.lock);
  }
  onContactedNames(event:any){
      alert(event.target.value);
  }

  interests:any[] = [ //Array<any>
    {valueX: 'reading', display:'阅读'},
    {valueX: 'traveling', display:'旅游'},
    {valueX: 'sport', display:'运动'}
  ];
  clickInterestValue(){
    alert(this.curContact.interestValue);
  }
  clickInterestObj(){
    alert(this.curContact.interestObj.valueX + ":" + this.curContact.interestObj.display);
  }
  clickInterestMul(){
    alert(this.curContact.interestMul);
  }
  onContactNames(){}

  doSubmit(formValue: any){
    alert(formValue);
  }

  customForm = new FormGroup ({
    customName: new FormControl("", [Validators.minLength(4)] ) /*, validateUserName*/
  });
}
