import { SystemService } from 'src/shared/system.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private readonly systemService: SystemService) {}
  create() {
    console.log('env', this.systemService.getEnv());
    return this.systemService.getEnv();
  }
}
