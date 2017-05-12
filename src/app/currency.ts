export class CurrencyItem{
    "CompanyCode":number;
    "Account":number;
    "City":string;
    "Country":string;
    "CreditRating":string;
    "Currency":string;
    "Amount":number;

    constructor(currencyItem:CurrencyItem){
        this.CompanyCode = currencyItem.CompanyCode;
        this.Account = currencyItem.Account;
        this.City = currencyItem.City;
        this.Country = currencyItem.Country;
        this.CreditRating = currencyItem.CreditRating;
        this.Currency = currencyItem.Currency;
        this.Amount = currencyItem.Amount;

    }
}