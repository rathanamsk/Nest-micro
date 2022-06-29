import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CharInput {
  @Field(()=> Number, {nullable: true})
  page?: number
}
