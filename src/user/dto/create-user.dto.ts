import { ApiProperty } from '@nestjs/swagger';
import { Matches, IsNotEmpty, Length } from 'class-validator';
export class CreateUserDto {
  @ApiProperty({ example: '15371536032' })
  @Matches(/^1\d{10}$/g, { message: '请输入手机号' })
  readonly phoneNumber: string;

  @ApiProperty({ example: 'handsomeBoy' })
  name: string;

  @ApiProperty({ example: 'gprs1234' })
  @IsNotEmpty()
  @Length(6, 10)
  password: string;

  @ApiProperty({ example: 'asd@126.com' })
  email: string;
}
