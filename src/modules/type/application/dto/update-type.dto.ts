import { IsOptional, IsString } from 'class-validator';

export default class UpdateTypeDto {
  @IsString({ message: 'O nome deve ser um string.' })
  @IsOptional()
  name?: string;
}
