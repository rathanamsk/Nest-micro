import { GraphQLRequest, InjectGraphQLRequest } from '@lib/graphql-request';

import { CharInput } from './char.input';
import { GetCharactersResult } from './char.model';
import { Product } from './product.entity';

export class ProductService {
  // simple dummy data
  product = [
    {
      product_id: 1,
      name: 'book1',
      price: '120$',
      available: true
    },
    {
      product_id: 2,
      name: 'book2',
      price: '100$',
      available: true
    },
    {
      product_id: 3,
      name: 'book3',
      price: '1920$',
      available: false
    },
    {
      product_id: 4,
      name: 'book4',
      price: '12$',
      available: true
    },
    {
      product_id: 5,
      name: 'book5',
      price: '10$',
      available: true
    }
  ];

  constructor( @InjectGraphQLRequest() private graphQLRequest: GraphQLRequest) {}

  get_all_product(): Product[] {
    return this.product;
  }

  async get_char_chrService({ page }: CharInput): Promise <GetCharactersResult>{
    const a = await this.graphQLRequest.getCharacters({ page });
    console.log(a)
    return a;
  }
}
