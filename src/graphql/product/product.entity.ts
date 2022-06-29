import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field()
  product_id!:number

  @Field()
  name!:string

  @Field()
  price!:string

  @Field()
  available!:boolean
}
