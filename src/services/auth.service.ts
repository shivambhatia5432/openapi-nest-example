import { Injectable } from '@nestjs/common';
import { User } from '@slash-spec/model/models';
import { MobileOTP } from '@slash-spec/model/models';
// import { AuthServiceSwitch } from '@slash-spec/api/auth.service.api-switch';

@Injectable()
export class AuthService {
  genNewOtp(phno: string): void {
    throw new Error('Method not implemented.');
  }
  verifyOtp(phno: string, nonce: string, otp: string): void {
    throw new Error('Method not implemented.');
  }
  deleteToken(user: User): void {
    throw new Error('Method not implemented.');
  }
  genNewAuthTokenByUser(user: User): void {
    throw new Error('Method not implemented.');
  }
  genNewAuthTokenByRefresh(refreshToken: string): void {
    throw new Error('Method not implemented.');
  }
  verifyAuthToken(token: string): void {
    throw new Error('Method not implemented.');
  }
  expireToken(user: User): void {
    throw new Error('Method not implemented.');
  }
  deleteRefresh(refresh: string): void {
    throw new Error('Method not implemented.');
  }
  //AuthorisedUser
  isAuthorisedUser(phno: string): void {
    throw new Error('Method not implemented.');
  }
}
