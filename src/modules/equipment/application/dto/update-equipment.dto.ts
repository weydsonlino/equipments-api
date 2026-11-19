import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateEquipmentDto {
  @IsString({ message: 'O nome deve ser um string.' })
  @IsOptional()
  model?: string;

  @IsString({ message: 'O ID do tipo deve ser um string.' })
  @IsUUID('7', { message: 'O ID do tipo deve ser um UUID válido.' })
  @IsOptional()
  type_id?: string;

  @IsString({ message: 'O ID do equipamento pai deve ser um string.' })
  @IsUUID('7', { message: 'O ID do equipamento pai deve ser um UUID válido.' })
  @IsOptional()
  parentEquipmentId?: string;
}
