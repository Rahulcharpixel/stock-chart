// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Color, ScaleType } from '@swimlane/ngx-charts';
// import { StockStore } from '../Store/stock.store';
// import { Stock } from '../models/stock.model';


// @Component({
//   selector: 'app-home',
//   templateUrl: 'home.page.html',
//   styleUrls: ['home.page.scss'],
// })
// export class HomePage implements OnInit {
//   public data: any[] = [];
//   public view: [number, number] = [800, 500];
//   public showLegend :boolean= true;
//   public showLabels :boolean= true;
//   public isDoughnut :boolean= false;

//       colorScheme : Color= {
//         domain: ['#ee3','#e3e'],
//         group: ScaleType.Ordinal,
//         selectable: true,
//         name: 'Stock Change Percentage'
//       };

//  constructor(private route: ActivatedRoute, public stockStore: StockStore) {}

//   ngOnInit() {


//     this.route.queryParams.subscribe(params => {
//       // const stocks: Stock[] = JSON.parse(params['stocks']);
//       this.data = this.stockStore.stocks.map((stock: Stock) => ({
//         name: stock.tradingsymbol,
//         value: stock.day_change_percentage

//       }));
//       // console.log('-->>',this.data);
//     });
//   }

//   onSelect(event: any) {
//     console.log(event);
//   }
// }







import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { StockStore } from '../Store/stock.store';
import { Stock } from '../models/stock.model';
import { generateUniqueColors } from '../utils/color-generator';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public data: any[] = [];
  public view: [number, number] = [800, 500];
  public showLegend: boolean = true;
  public showLabels: boolean = true;
  public isDoughnut: boolean = false;
  public colorScheme: Color = {
    domain: [],
    group: ScaleType.Ordinal,
    selectable: true,
    name: 'Stock Change Percentage'
  };

  constructor(private route: ActivatedRoute, public stockStore: StockStore) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.data = this.stockStore.stocks.map((stock: Stock) => ({
        name: stock.tradingsymbol,
        value: stock.day_change_percentage
      }));

      this.colorScheme.domain = generateUniqueColors(this.data.length);
      
    });
  }


  onSelect(event: any) {
    console.log(event);
  }
}