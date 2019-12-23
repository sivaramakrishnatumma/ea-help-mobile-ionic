import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../../types/ea-help.types';

/**
 * Generated class for the ProductPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'productPipe',
})
export class ProductPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(products: IProduct[], searchStr) {
    return searchStr ? products.filter(product => product.altNames.toLowerCase().indexOf(searchStr.toLowerCase()) > -1): products;
  }
}
