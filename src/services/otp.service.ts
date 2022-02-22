import { Injectable } from '@nestjs/common';
import { OtpServiceSwitch } from '@slash-spec/api/otp.service.api-switch';
import {
  OtpRequestBody,
  OtpResponseBody,
  OtpVerifyRequestBody,
  OtpVerifyResponseBody,
} from '@slash-spec/model/models';

@Injectable()
export class OtpServices implements OtpServiceSwitch {
  generateOtp(
    deviceId: string,
    appVersion: number,
    body: OtpRequestBody,
  ): OtpResponseBody {
    throw new Error('Method not implemented.');
  }
  verifyOtp(
    deviceId: string,
    appVersion: number,
    body: OtpVerifyRequestBody,
  ): OtpVerifyResponseBody {
    throw new Error('Method not implemented.');
  }
}
