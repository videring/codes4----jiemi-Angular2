import { Component, AfterViewInit, ViewChild, ElementRef, Renderer} from '@angular/core';

@Component({
  selector: 'zouInput',
  template:`
    <input #theInput type="text" placeholder="{{ph}}" (click)="clickMe()" value={{name}} (blur)="blurFunc()" (keyup)="onKey($event)"/> <!-- 不能用onblur -->
    <input type="text" (input)="firstName=$event.target.value" [value]="firstName"/>
    <div style="width:100px;height:10px;">zouInput</div>

    <input #theInputTest type="text" (keyup)="onKeyTest()"/>
    <p>Click {{theInputTest.value}}</p>
  `
})

export class ZouInput implements AfterViewInit {
   @ViewChild('theInput') input: ElementRef;
   values = "";
   name = "";
   ph = "please input your name...";
   firstName="test";
   constructor(private renderer: Renderer) {}

   ngAfterViewInit(){
     this.renderer.invokeElementMethod(this.input.nativeElement, 'focus');
   }

   clickMe(){
     this.values = "";
     this.name = "";
     this.ph = "";
   }

   blurFunc(){
     if(this.values == ""){
       this.name = "please input your name...";
     }
   }

   onKey1(event: KeyboardEvent) {
    this.values += (<HTMLInputElement>event.target).value + ' | ';
  }

  onKey(event:any) {
    this.values = event.target.value;
  }

  onKeyTest() {
  }
}
