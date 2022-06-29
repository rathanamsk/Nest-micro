import { Args, Query, Resolver } from '@nestjs/graphql';

import { CharInput } from './char.input';
import { GetCharactersResult } from './char.model';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@Resolver()
export class ProductResolver {
  constructor (  private productService:ProductService) {}

  @Query(()=>[Product])
  get_all_product(){
    return this.productService.get_all_product()
  }

  @Query( ()=> GetCharactersResult)
  get_char_charService(@Args('charInput') charInput:CharInput){
    return this.productService.get_char_chrService(charInput)
  }
}
