import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import { jqxInputComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxinput';
import { jqxButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbuttons';
import { jqxChartComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxchart';
import { jqxMenuComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxmenu';
import { jqxTreeGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtreegrid';
import { jqxCheckBoxComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxcheckbox';
import { jqxRadioButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxradiobutton';
import { jqxSwitchButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxswitchbutton';
import { jqxTabsComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    jqxGridComponent, jqxInputComponent,
    jqxButtonComponent, jqxChartComponent, jqxMenuComponent, jqxTreeGridComponent,
    jqxCheckBoxComponent, jqxRadioButtonComponent, jqxSwitchButtonComponent,
  ],
  declarations: [AppComponent, jqxGridComponent, jqxInputComponent,
    jqxButtonComponent, jqxChartComponent, jqxMenuComponent,
    jqxCheckBoxComponent, jqxRadioButtonComponent, jqxSwitchButtonComponent,
    jqxTreeGridComponent, jqxTabsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
