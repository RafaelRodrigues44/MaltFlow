import { IsString, IsEnum, IsNotEmpty, MinLength } from 'class-validator';
import { UserRole } from '../entities/user-role.enum';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6, { message: 'A senha deve ter pelo menos 6 caracteres' })
  password: string;

  @IsEnum(UserRole, {
    message: 'A role deve ser admin, sales, inventory ou financial',
  })
  @IsNotEmpty()
  role: UserRole;
}