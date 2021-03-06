import { IsString, MaxLength, IsUrl, IsEmail } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';
import { ReadDriverDto } from '../../driver/dtos';

@Exclude()
export class ReadCatDto {
  @Expose()
  readonly id: number;

  @Expose()
  @IsString()
  @MaxLength(50, { message: 'This name is not valid' })
  readonly name: string;

  @Expose()
  @IsString()
  @MaxLength(150, { message: 'This description is not valid' })
  readonly description: string;

  @Expose()
  @IsString()
  @MaxLength(20, { message: 'This alias is not valid' })
  readonly alias: string;

  @Expose()
  @IsString()
  readonly address: string;

  @Expose()
  @IsString()
  readonly phone: string;

  @Expose()
  @IsString()
  readonly country: string;

  @Expose()
  @IsEmail({}, { message: 'Must be an email' })
  readonly email?: string;

  @Expose()
  readonly drivers: ReadDriverDto[];

  @Expose()
  @IsUrl({}, { message: 'Must be an URL' })
  readonly web?: string;

  @Expose()
  @IsUrl({}, { message: 'Must be an URL' })
  readonly logoURL: string;
}
