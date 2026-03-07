import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: 'user name', description: 'O nome de usuário cadastrado na tabela ZUR' })
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({ example: 'password', description: 'A senha do colaborador' })
  @IsNotEmpty()
  @IsString()
  password: string;
}