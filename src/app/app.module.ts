import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule


import { AppComponent } from './app.component';
import { PowerComponent } from './power/power.component';
import { ComponentComponent } from './power/component/component.component';
import { SaiyanComponent } from './power/saiyan/saiyan.component';
import { SupersaiyanComponent } from './power/supersaiyan/supersaiyan.component';
import { SaiyantwoComponent } from './power/saiyantwo/saiyantwo.component';
import { SaiyanthreeComponent } from './power/saiyanthree/saiyanthree.component';
import { SaiyanfourComponent } from './power/saiyanfour/saiyanfour.component';


@NgModule({
  declarations: [
    AppComponent,
    PowerComponent,
    ComponentComponent,
    SaiyanComponent,
    SupersaiyanComponent,
    SaiyantwoComponent,
    SaiyanthreeComponent,
    SaiyanfourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- Include module in our AppModules
		HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
