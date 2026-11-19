import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class RegisterTypeDto {
  @IsString({ message: 'O nome deve ser um string.' })
  @IsNotEmpty({ message: 'O nome não pode ser vazio.' })
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  name: string;
}
