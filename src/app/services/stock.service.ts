// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class StockService {
//   private apiUrl = 'https://oxemay2fj2.execute-api.us-east-1.amazonaws.com/';

//   constructor(private http: HttpClient) { }

//   getStocks(): Observable<any> {
//     return this.http.get<any>(this.apiUrl);
//   }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StockStore } from '../Store/stock.store';
import { Stock } from '../models/stock.model';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  private apiUrl = 'https://oxemay2fj2.execute-api.us-east-1.amazonaws.com/';

  constructor(private http: HttpClient, private stockStore: StockStore) { }

  getStocks() {
    this.http.get<{ stocks: Stock[] }>(this.apiUrl).subscribe((data) => {
      this.stockStore.setStocks(data.stocks);
    });
  }
}