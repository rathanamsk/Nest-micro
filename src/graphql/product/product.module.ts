import { Module } from '@nestjs/common';
import { GraphQLClient } from 'graphql-request';

import { GraphQLRequest } from '@lib/graphql-request';

import { ProductService } from './product.service';
import { ProductResolver } from './produnct.resolver';

@Module({
  providers:[ProductService,ProductResolver,GraphQLRequest,GraphQLClient]
})

export class ProductModule {}
