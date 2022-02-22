import { Injectable } from '@nestjs/common';
import { User } from '@slash-spec/model/models';
import { UserServiceSwitch } from '@slash-spec/api/user.service.api-switch';

@Injectable()
export class UserServices implements UserServiceSwitch {
  createUser(body: User): void {
    throw new Error('Method not implemented.');
  }
  createUsersWithArrayInput(body: User[]): void {
    throw new Error('Method not implemented.');
  }
  createUsersWithListInput(body: User[]): void {
    throw new Error('Method not implemented.');
  }
  deleteUser(username: string): void {
    throw new Error('Method not implemented.');
  }
  getUserByName(username: string): User {
    throw new Error('Method not implemented.');
  }
  loginUser(username: string, password: string): string {
    throw new Error('Method not implemented.');
  }
  logoutUser(): undefined {
    throw new Error('Method not implemented.');
  }
  updateUser(username: string, body: User): void {
    throw new Error('Method not implemented.');
  }
}
