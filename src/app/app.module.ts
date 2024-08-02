import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MobxAngularModule } from 'mobx-angular';

// import { StockChartPageModule } from './stock-chart/stock-chart.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TabsComponent } from './tabs/tabs.component';
import { HomePageModule } from './home/home.module';

@NgModule({
  declarations: [AppComponent,TabsComponent],
  imports: [BrowserModule, IonicModule.forRoot(),
     AppRoutingModule, 
     HttpClientModule, 
     NgxDatatableModule,
     MobxAngularModule, 
    HomePageModule,
     NgxChartsModule
    ],

  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
