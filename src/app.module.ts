// app.module.ts
import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {NgContentExampleComponent} from "./NgContentExampleComponent";
import {ZouInput} from "./AfterViewInitExample";
import {AnimationsComponentExample} from "./AnimationsComponentExample";
import {ListComponent} from "./list.component";
import {ListItemComponent} from "./item.component";
import {ListService} from "./ListService";
import {FormComponent} from "./form.component";
import {PipeComponent} from "./pipe.component";
import {AmountComponent} from "./amount.component";
import {BeautifulBackgroundDirective} from "./beautifulBackground.directive";

@NgModule({
  declarations: [AppComponent, NgContentExampleComponent, ZouInput, AnimationsComponentExample,
    ListComponent, ListItemComponent, FormComponent, PipeComponent, AmountComponent, BeautifulBackgroundDirective],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
