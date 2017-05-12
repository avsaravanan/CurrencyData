import { Component } from '@angular/core';
import {CurrencyService} from './currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

currencyData;

constructor(private _currencyService:CurrencyService){
 this.currencyData = _currencyService.getData();
}

}
