import { Document } from 'mongoose';
import { IOrg } from '../../org/interfaces';
import { BaseInterface } from '../../../shared/base.interface';

export interface ICat extends Document, BaseInterface {
  readonly idCategory: string;
  readonly idOrg: IOrg;
  readonly strCat: string;
  readonly strCatShort: string;
  readonly idEspn: string;
  readonly idTsdb: string;
  readonly idMss: string;
  readonly idMyL: string;
  readonly idRCtrl: string;
  readonly strAlternate: string;
  readonly intFormedYear: string;
  readonly strSport: string;
  readonly strLeague: string;
  readonly strDivision: string;
  readonly strManager: string;
  readonly strWebsite: string;
  readonly strFacebook: string;
  readonly strTwitter: string;
  readonly strInstagram: string;
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
  readonly strCountry: string;
  readonly strCatBadge: string;
  readonly strCatJersey: string;
  readonly strCatLogo: string;
  readonly strCatFanart1: string;
  readonly strCatFanart2: string;
  readonly strCatFanart3: string;
  readonly strCatFanart4: string;
  readonly strCatBanner: string;
  readonly strYoutube: string;
  readonly strLocked: string;
  readonly infoInCat: string;
  readonly isOnlyImg: boolean;
}
