import {
  IsString,
  IsOptional,
  IsUrl,
  ArrayNotEmpty,
  ArrayUnique,
} from 'class-validator';

export class CreateProjectDto {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  desc?: string;

  @IsString({ each: true })
  @ArrayNotEmpty()
  @ArrayUnique()
  tags: string[];

  @IsUrl()
  urlImg: string;

  @IsUrl()
  @IsOptional()
  gitUrl?: string;

  @IsUrl()
  @IsOptional()
  previewUrl?: string;
}
