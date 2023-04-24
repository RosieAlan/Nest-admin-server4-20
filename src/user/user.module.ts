import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SystemService } from 'src/shared/system.service';

@Module({
  controllers: [UserController],
  providers: [UserService, SystemService],
})
export class UserModule {}
