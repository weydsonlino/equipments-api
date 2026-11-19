import { IsOptional, IsString, IsUUID } from 'class-validator';

export class RegisterEquipmentDto {
  @IsString({ message: 'O nome deve ser um string.' })
  model: string;

  @IsString({ message: 'O ID do tipo deve ser um string.' })
  @IsUUID('7', { message: 'O ID do tipo deve ser um UUID válido.' })
  type_id: string;

  @IsString({ message: 'O ID do equipamento pai deve ser uma string.' })
  @IsUUID('7', { message: 'O ID do equipamento pai deve ser um UUID válido.' })
  @IsOptional()
  parentEquipmentId?: string;
}
