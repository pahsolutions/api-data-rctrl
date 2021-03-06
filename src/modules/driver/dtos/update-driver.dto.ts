import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNumber, IsBoolean } from 'class-validator';

export class UpdateDriverDto {
  @ApiProperty()
  @IsString()
  readonly idPlayer: string;

  @ApiProperty()
  @IsString()
  readonly idCategory: string;

  @ApiProperty()
  @IsString()
  readonly idCat: string;

  @ApiPropertyOptional()
  @IsString()
  readonly idTeam: string;

  @ApiPropertyOptional()
  @IsString()
  readonly idTeam2: string;

  @ApiPropertyOptional()
  @IsString()
  readonly idTeamNational: string;

  @ApiPropertyOptional()
  @IsString()
  readonly idEspn: string;

  @ApiPropertyOptional()
  @IsString()
  readonly idTsdb: string;

  @ApiPropertyOptional()
  @IsString()
  readonly idMss: string;

  @ApiPropertyOptional()
  @IsString()
  readonly idMyL: string;

  @ApiPropertyOptional()
  @IsString()
  readonly idRCtrl: string;

  @ApiPropertyOptional()
  @IsString()
  readonly idSoccerXML: string;

  @ApiPropertyOptional()
  @IsString()
  readonly idAPIfootball: string;

  @ApiPropertyOptional()
  @IsString()
  readonly idPlayerManager: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strNationality: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strPlayer: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strTeam: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strTeam2: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strSport: string;

  @ApiPropertyOptional()
  @IsString()
  readonly intSoccerXMLTeamID: string;

  @ApiPropertyOptional()
  @IsString()
  readonly dateBorn: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strNumber: string;

  @ApiPropertyOptional()
  @IsString()
  readonly dateSigned: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strSigning: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strWage: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strOutfitter: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strKit: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strAgent: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strBirthLocation: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strDescriptionEN: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strDescriptionDE: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strDescriptionFR: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strDescriptionCN: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strDescriptionIT: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strDescriptionJP: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strDescriptionRU: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strDescriptionES: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strDescriptionPT: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strDescriptionSE: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strDescriptionNL: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strDescriptionHU: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strDescriptionNO: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strDescriptionIL: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strDescriptionPL: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strGender: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strSide: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strPosition: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strCollege: string;

  @ApiPropertyOptional()
  @IsNumber()
  readonly numSeason: number;

  @ApiPropertyOptional()
  @IsString()
  readonly strFacebook: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strWebsite: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strTwitter: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strInstagram: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strYoutube: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strHeight: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strWeight: string;

  @ApiPropertyOptional()
  @IsString()
  readonly intLoved: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strThumb: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strCutout: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strRender: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strBanner: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strFanart1: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strFanart2: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strFanart3: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strFanart4: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strCreativeCommons: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strLocked: string;

  @ApiPropertyOptional()
  @IsBoolean()
  readonly isOnlyImg: boolean;
}
