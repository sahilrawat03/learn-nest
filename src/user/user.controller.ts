import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserValidate } from './validators/createuser';

@Controller('user')
export class UserController {
  @Get(':list')
  getUsers(@Param('list') id: string): object {
    console.log(id);
    return [{ user: `users list ${id}` }, { age: 333 }];
  }

  @Post()
  createUser(@Body() CreateUserValidate: CreateUserValidate): object {
    console.log(CreateUserValidate);
    return CreateUserValidate;
  }
}
