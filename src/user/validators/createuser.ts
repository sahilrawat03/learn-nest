import { IsEmail, IsNumberString, IsString } from 'class-validator';

export class CreateUserValidate {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsNumberString()
  age: number;
}

export class updateUserValidate {
  @IsString()
  name: string;

  // @IsEmail()
  // email: string;

  @IsNumberString()
  age: number;
}
