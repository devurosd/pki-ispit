import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';


@Pipe({ 
    name: 'appFilter'
 })
export class FilterPipe implements PipeTransform {
  
  transform(products: Product[], searchText: string): any[] {
    if (!products) {
      return [];
    }
    if (!searchText) {
      return products;
    }
    searchText = searchText.toLocaleLowerCase();

    return products.filter(p => {
      return p.name.toLocaleLowerCase().includes(searchText);
    });
  }
}