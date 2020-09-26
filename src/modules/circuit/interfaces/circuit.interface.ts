import { Document } from 'mongoose';
import { BaseInterface } from '../../../shared/base.interface';

export interface ICircuit extends Document, BaseInterface {
  readonly idCircuit: string;
  readonly idEspn: string;
  readonly idTsdb: string;
  readonly idMss: string;
  readonly idMyL: string;
  readonly idRCtrl: string;
  readonly strCircuit: string;
  readonly strCircuitShort: string;
  readonly strAlternate: string;
  readonly intFormedYear: string;
  readonly strSport: string;
  readonly strLeague: string;
  readonly strType: string;
  readonly strLength: string;
  readonly strDirection: string;
  readonly strCorners: string;
  readonly strRSS: string;
  readonly strStadium: string;
  readonly strStadiumThumb: string;
  readonly strStadiumDescription: string;
  readonly strStadiumLocation: string;
  readonly intStadiumCapacity: string;
  readonly intSoccerXMLTeamID: string;
  readonly numSeason: number;
  readonly strWebsite: string;
  readonly strFacebook: string;
  readonly strTwitter: string;
  readonly strInstagram: string;
  readonly strYoutube: string;
  readonly strDescriptionEN: string;
  readonly strDescriptionDE: string;
  readonly strDescriptionFR: string;
  readonly strDescriptionCN: string;
  readonly strDescriptionIT: string;
  readonly strDescriptionJP: string;
  readonly strDescriptionRU: string;
  readonly strDescriptionES: string;
  readonly strDescriptionPT: string;
  readonly strDescriptionSE: string;
  readonly strDescriptionNL: string;
  readonly strDescriptionHU: string;
  readonly strDescriptionNO: string;
  readonly strDescriptionIL: string;
  readonly strDescriptionPL: string;
  readonly strAddress: string;
  readonly strCountry: string;
  readonly strBadge: string;
  readonly strJersey: string;
  readonly strLogo: string;
  readonly strFanart1: string;
  readonly strFanart2: string;
  readonly strFanart3: string;
  readonly strFanart4: string;
  readonly strBanner: string;
  readonly strLocked: string;
  readonly isOnlyImg: boolean;
}
