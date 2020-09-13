import { Schema } from 'mongoose';

export const CatSchema = new Schema(
  {
    idCategory: { type: String, required: true },
    idLeague: { type: Schema.Types.ObjectId, ref: 'Orgs', required: true },
    strCat: { type: String, required: true },
    strCatShort: String,
    strAlternate: String,
    idEspn: String,
    idTsdb: String,
    idMss: String,
    idRCtrl: String,
    intFormedYear: String,
    strSport: String,
    strLeague: String,
    strDivision: String,
    strManager: String,
    strWebsite: String,
    strFacebook: String,
    strTwitter: String,
    strInstagram: String,
    strDescriptionEN: String,
    strDescriptionDE: String,
    strDescriptionFR: String,
    strDescriptionCN: String,
    strDescriptionIT: String,
    strDescriptionJP: String,
    strDescriptionRU: String,
    strDescriptionES: String,
    strDescriptionPT: String,
    strDescriptionSE: String,
    strDescriptionNL: String,
    strDescriptionHU: String,
    strDescriptionNO: String,
    strDescriptionIL: String,
    strDescriptionPL: String,
    strCountry: String,
    strCatBadge: String,
    strCatJersey: String,
    strCatLogo: String,
    strCatFanart1: String,
    strCatFanart2: String,
    strCatFanart3: String,
    strCatFanart4: String,
    strCatBanner: String,
    strYoutube: String,
    strLocked: String,
    isOnlyImg: Boolean,
  },
  {
    versionKey: false,
    timestamps: true,
  },
);
