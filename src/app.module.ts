import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';

import { ConfigModule } from '@lib/config';
import { CryptoModule } from '@lib/crypto';
import { GraphQLRequestModule } from '@lib/graphql-request';
import { JwtModule } from '@lib/jwt';

import { ApiModule } from './api/api.module';
import { GraphQLAPIModule } from './graphql/graphql.module';

@Module({
  imports: [
    ApiModule,
    ConfigModule,
    CryptoModule,
    GraphQLRequestModule,
    GraphQLAPIModule,
    JwtModule,
    ScheduleModule.forRoot(),
  ]
})
export class ApplicationModule {}
