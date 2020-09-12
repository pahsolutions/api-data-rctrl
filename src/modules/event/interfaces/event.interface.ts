import { Document } from 'mongoose';
import { IOrg } from '../../org/interfaces';
import { BaseInterface } from '../../../shared/base.interface';

export interface IEvent extends Document, BaseInterface {
  readonly idEvent: string;
  readonly strEvent: string;
  readonly strEventAlternate: string;
  readonly strFilename: string;
  readonly strSport: string;
  readonly idLeague: IOrg[];
  // readonly idCategory: ICat[];
  readonly strLeague: string;
  readonly strSeason: string;
  readonly strDescriptionEN: string;
  readonly intRound: string;
  readonly dateEvent: string;
  readonly dateEventLocal: string;
  readonly strDate: string;
  readonly strTime: string;
  readonly strTimeLocal: string;
  readonly strTVStation: string;
  readonly strResult: string;
  readonly strCircuit: string;
  readonly strCountry: string;
  readonly strCity: string;
  readonly strPoster: string;
  readonly strFanart: string;
  readonly strThumb: string;
  readonly strBanner: string;
  readonly strMap: string;
  readonly strTweet1: string;
  readonly strTweet2: string;
  readonly strTweet3: string;
  readonly strVideo: string;
  readonly strPostponed: string;
  readonly strLocked: string;
}
