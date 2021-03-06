import { Schema } from 'mongoose';

export const TeamSchema = new Schema(
  {
    idTeam: { type: String, required: true, unique: true },
    idOrg: { type: Schema.Types.ObjectId, ref: 'Orgs', required: true },
    idCat: { type: Schema.Types.ObjectId, ref: 'Cats', required: true },
    idEspn: { type: String, default: '' },
    idTsdb: { type: String, default: '' },
    idMss: { type: String, default: '' },
    idMyL: { type: String, default: '' },
    idRCtrl: { type: String, default: '' },
    idSoccerXML: { type: String, default: '' },
    idAPIfootball: { type: String, default: '' },
    intLoved: { type: String, default: '' },
    strTeam: { type: String, default: '' },
    strTeamShort: { type: String, default: '' },
    strAlternate: { type: String, default: '' },
    intFormedYear: { type: String, default: '' },
    strSport: { type: String, default: '' },
    strLeague: { type: String, default: '' },
    strLeague2: { type: String, default: '' },
    idLeague2: { type: Schema.Types.ObjectId, ref: 'Orgs' },
    strLeague3: { type: String, default: '' },
    idLeague3: { type: Schema.Types.ObjectId, ref: 'Orgs' },
    strLeague4: { type: String, default: '' },
    idLeague4: { type: Schema.Types.ObjectId, ref: 'Orgs' },
    strLeague5: { type: String, default: '' },
    idLeague5: { type: Schema.Types.ObjectId, ref: 'Orgs' },
    strLeague6: { type: String, default: '' },
    idLeague6: { type: Schema.Types.ObjectId, ref: 'Orgs' },
    strLeague7: { type: String, default: '' },
    idLeague7: { type: Schema.Types.ObjectId, ref: 'Orgs' },
    strDivision: { type: String, default: '' },
    strManager: { type: String, default: '' },
    strStadium: { type: String, default: '' },
    strKeywords: { type: String, default: '' },
    strRSS: { type: String, default: '' },
    strStadiumThumb: { type: String, default: '' },
    strStadiumDescription: { type: String, default: '' },
    strStadiumLocation: { type: String, default: '' },
    intStadiumCapacity: { type: String, default: '' },
    numSeason: { type: Number, default: new Date().getFullYear() },
    strWebsite: { type: String, default: '' },
    strFacebook: { type: String, default: '' },
    strTwitter: { type: String, default: '' },
    strInstagram: { type: String, default: '' },
    strYoutube: { type: String, default: '' },
    strDescriptionEN: { type: String, default: '' },
    strDescriptionDE: { type: String, default: '' },
    strDescriptionFR: { type: String, default: '' },
    strDescriptionCN: { type: String, default: '' },
    strDescriptionIT: { type: String, default: '' },
    strDescriptionJP: { type: String, default: '' },
    strDescriptionRU: { type: String, default: '' },
    strDescriptionES: { type: String, default: '' },
    strDescriptionPT: { type: String, default: '' },
    strDescriptionSE: { type: String, default: '' },
    strDescriptionNL: { type: String, default: '' },
    strDescriptionHU: { type: String, default: '' },
    strDescriptionNO: { type: String, default: '' },
    strDescriptionIL: { type: String, default: '' },
    strDescriptionPL: { type: String, default: '' },
    strGender: { type: String, default: '' },
    strCountry: { type: String, default: '' },
    strTeamBadge: { type: String, default: '' },
    strTeamJersey: { type: String, default: '' },
    strTeamLogo: { type: String, default: '' },
    strTeamFanart1: { type: String, default: '' },
    strTeamFanart2: { type: String, default: '' },
    strTeamFanart3: { type: String, default: '' },
    strTeamFanart4: { type: String, default: '' },
    strTeamBanner: { type: String, default: '' },
    strLocked: { type: String, default: '' },
    isOnlyImg: { type: Boolean, default: false },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);
