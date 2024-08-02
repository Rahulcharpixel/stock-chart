// import { makeAutoObservable } from 'mobx';

// class StockStore {
//   stocks: any[] = [];

//   constructor() {
//     makeAutoObservable(this);
//   }

//   setStocks(stocks: any[]) {
//     this.stocks = stocks;
//     console.log(this.stocks);
//   }
// }

// export const stockStore = new StockStore();

import { Injectable } from '@angular/core';
import { observable, action, computed } from 'mobx-angular';
import { Stock } from '../models/stock.model';

@Injectable({
  providedIn: 'root',
})
export class StockStore {
  @observable stocks: Stock[] = [];

  @action setStocks(stocks: any[]) {
    this.stocks = stocks;
    
  }

  @computed get totalInvestment() {

    return this.stocks.reduce((sum, stock) =>  sum + (stock.close_price * stock.quantity), 0);
  }

  @computed get totalProfitOrLoss() {
    return this.stocks.reduce((sum, stock) => sum + stock.pnl, 0);
  }
}
