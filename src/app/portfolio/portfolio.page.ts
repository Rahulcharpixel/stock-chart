import { Component, OnInit } from '@angular/core';
import { StockService } from '../services/stock.service';
import { Router } from '@angular/router';
import { StockStore } from '../Store/stock.store';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.page.html',
  styleUrls: ['./portfolio.page.scss'],
})
export class PortfolioPage implements OnInit {

  columns: any[] = [
    { prop: 'tradingsymbol', name: 'Trading Symbol' },
    { prop: 'quantity', name: 'Quantity' },
    { prop: 'close_price', name: 'Close Price' },
    { prop: 'last_price', name: 'Last Price' },
    { prop: "close_price", name:"Close Price" },
    { prop: "close_price_percentage", name:"Close Price Percentage" },
    { prop: 'pnl', name: 'Profit and Loss' },  
  ];
public loading: boolean = true;
  constructor(public stockService: StockService, public stockStore: StockStore,public router : Router) { }

  ngOnInit(): void {
    this.stockService.getStocks();
    this.loading = false
  }

  getProfitLossColor(value: number): string {
    return value >= 0 ? 'green' : 'red';
  }
}

