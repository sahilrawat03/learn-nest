import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  findOne(id: string) {
    console.log('id hai ye');
    return { id: id };
  }
}
