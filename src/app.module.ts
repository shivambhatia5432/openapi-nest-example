import { Module } from '@nestjs/common';
import { Controllers } from '@slash-spec/api-index';
import { OtpServices } from './services/otp.service';
import { UserServices } from './services/user.service';

@Module({
  imports: [],
  controllers: Controllers,
  providers: [
    {
      provide: 'OtpServiceSwitch',
      useClass: OtpServices,
    },
    {
      provide: 'UserServiceSwitch',
      useClass: UserServices,
    },
  ],
})
export class AppModule {}
