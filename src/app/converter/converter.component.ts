import { CommonModule } from '@angular/common';
import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.css',
})
export class ConverterComponent {
  amountValue: number = 0;
  fromCurrency: string = 'GBP';
  toCurrency: string = 'USD';
  result: number = 0;

  fromOptions: any = [];
  toOptions: any = [];

  constructor() {}

  currencyOptions: Array<{
    id: number;
    name: string;
    value: string;
    imgSrc: string;
  }> = [
    {
      id: 1,
      name: 'USD - US Dollar',
      value: 'USD',
      imgSrc: '/assets/icons/amerikan_flag.svg',
    },
    {
      id: 2,
      name: 'GBP - British Pound',
      value: 'GBP',
      imgSrc: '/assets/icons/Uk_flag.svg',
    },
    {
      id: 3,
      name: 'EUR - Euro',
      value: 'EURO',
      imgSrc: '/assets/icons/eur_flag.svg',
    },
  ];

  // sortOptions = (options: any[], currentValue: string) => {
  //   const currentIndex = options.findIndex(
  //     (option) => option.value === currentValue
  //   );
  //   const sortedOptions = [...options];

  //   if (currentIndex !== -1) {
  //     sortedOptions.splice(currentIndex, 1);
  //     sortedOptions.unshift(options[currentIndex]);
  //   }

  //   return sortedOptions;
  // };

  // initializeOptions(): void {
  //   this.fromOptions = this.sortOptions(
  //     this.currencyOptions,
  //     this.fromCurrency
  //   );
  //   this.toOptions = this.sortOptions(this.currencyOptions, this.toCurrency);
  // }

  setFromCurrency(value: string): void {
    this.fromCurrency = value;
  }
  setToCurrency(value: string): void {
    this.toCurrency = value;
  }
}
