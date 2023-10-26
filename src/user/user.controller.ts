import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import {
  CreateUserValidate,
  updateUserValidate,
} from './validators/createuser';
import { UserService } from './user.service';
import { CommentService } from 'src/comment/comment.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly commentService: CommentService,
  ) {}

  // @Get(':list')
  // getUsers(@Param('list') id: string): object {
  //   console.log(id);
  //   return [{ user: `users list ${id}` }, { age: 333 }];
  // }
  @Get(':list')
  findOne(@Param('list') id: string): object {
    console.log(this.commentService.findUserComments(id));
    return this.userService.findOne(id);
  }

  @Post()
  createUser(@Body() CreateUserValidate: CreateUserValidate) {
    console.log(CreateUserValidate);
    return CreateUserValidate;
  }
  @Put()
  updateUser(@Body() updateUserValidate: updateUserValidate) {
    console.log(updateUserValidate);
    return updateUserValidate;
  }
}
