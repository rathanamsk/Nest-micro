import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { ConfigService } from '@lib/config';

import { ProductModule } from './product/product.module';

@Module({
  imports: [
    ProductModule,
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      inject: [ConfigService],
      driver: ApolloDriver,
      useFactory: (config: ConfigService) => {
        return {
          path: 'test',
          sortSchema: false,
          playground: config.env.NODE_ENV === 'development',
          autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
          context: ({ req }) => ({ req })
        };
      }
    })
  ]
})
export class GraphQLAPIModule {}
