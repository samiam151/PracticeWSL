import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { ParentChildService } from "./services/parent-child-service.service";
import { SomeOtherComponent } from './components/some-other/some-other.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    SomeOtherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ParentChildService],
  bootstrap: [AppComponent]
})
export class AppModule { }
