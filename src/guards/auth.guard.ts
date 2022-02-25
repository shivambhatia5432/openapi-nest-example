import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import jwt from 'jsonwebtoken';
import { User } from '@slash-spec/model/models';
import { AuthService } from 'src/services/auth.service';
import { UserService } from '@slash-spec/api/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  @Inject() authService!: AuthService;
  @Inject() usersService!: UserService;

  async canActivate(context: ExecutionContext): Promise<boolean> {
    if (context.getType() !== 'http') {
      throw new BadRequestException('Auth Guard is only for HTTP requests');
    }

    const request = context.switchToHttp().getRequest()!;
    const authHeader = request.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer')) {
      throw new UnauthorizedException('Bearer Token not present');
    }
    let JWTaccessToken,
      jwtObject,
      authToken,
      user = null;
    try {
      JWTaccessToken = authHeader.split(' ')[1];
      jwtObject = JSON.stringify(jwt.verify(JWTaccessToken, 'slash'));
      authToken = JSON.parse(jwtObject).authToken;
      user = await this.authService.verifyAuthToken(authToken);
    } catch (err) {
      throw new HttpException(
        {
          error: 'Invalid Auth Token',
          status: 'SLASH-6301',
        },
        HttpStatus.UNAUTHORIZED,
      );
    }
    if (!user) {
      throw new HttpException(
        {
          error: 'Invalid Auth Token',
          status: 'SLASH-6301',
        },
        HttpStatus.UNAUTHORIZED,
      );
    }
    if (user.state === User.StateEnum.Blocked) {
      throw new HttpException(
        {
          error: 'User is Blocked',
          status: 'SLASH-6302',
        },
        HttpStatus.FORBIDDEN,
      );
    }
    if (user.userState == User.StateEnum.Paused) {
      throw new HttpException(
        {
          error: 'User is Blocked',
          status: 'SLASH-6302',
        },
        HttpStatus.FORBIDDEN,
      );
    }
    request.user = user;
    return true;
  }
}
