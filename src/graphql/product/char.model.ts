import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
class Info {
  @Field()
  count!: number;

  @Field()
  pages!: number;

  @Field()
  next!: number;

  @Field()
  prev!: number;
}

@ObjectType()
class Results {

  @Field()
  id!: string;

  @Field()
  name!: string;

  @Field()
  status!: string;

  @Field()
  species!: string;

  @Field()
  gender!: string;
}

@ObjectType()
export class GetCharacters {
  @Field(()=> Info, {nullable: true})
  info?:Info;

  @Field(()=> [Results])
  results?:Results[];
}

@ObjectType()
export class GetCharactersResult {
  @Field(()=> GetCharacters, {nullable: true})
  characters?:GetCharacters;
}
