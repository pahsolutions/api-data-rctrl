import { IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IOrg } from 'src/modules/org/interfaces';

export class CreateEventDto {
  @ApiProperty()
  @IsString()
  readonly idEvent: string;

  @ApiProperty({ description: 'Event Name' })
  @IsString()
  readonly strEvent: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strEventAlternate: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strFilename: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strSport: string;

  @ApiPropertyOptional()
  @IsString()
  readonly idLeague: IOrg[];

  // @ApiPropertyOptional()
  // @IsString()
  // readonly idCategory: ICat[];

  @ApiPropertyOptional()
  @IsString()
  readonly strLeague: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strSeason: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strDescriptionEN: string;

  @ApiPropertyOptional()
  @IsString()
  readonly intRound: string;

  @ApiPropertyOptional()
  @IsString()
  readonly dateEvent: string;

  @ApiPropertyOptional()
  @IsString()
  readonly dateEventLocal: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strDate: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strTime: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strTimeLocal: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strTVStation: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strResult: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strCircuit: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strCountry: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strCity: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strPoster: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strFanart: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strThumb: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strBanner: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strMap: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strTweet1: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strTweet2: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strTweet3: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strVideo: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strPostponed: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strLocked: string;
}
