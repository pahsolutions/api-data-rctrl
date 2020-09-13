import { Schema } from 'mongoose';

export const DriverSchema = new Schema(
  {
    idPlayer: { type: String, required: true },
    idLeague: { type: Schema.Types.ObjectId, ref: 'Orgs', required: true },
    idCategory: { type: Schema.Types.ObjectId, ref: 'Cats', required: true },
    idTeam: { type: Schema.Types.ObjectId, ref: 'Teams' },
    idTeam2: { type: Schema.Types.ObjectId, ref: 'Teams' },
    idTeamNational: String,
    idEspn: String,
    idTsdb: String,
    idMss: String,
    idRCtrl: String,
    idSoccerXML: String,
    idAPIfootball: String,
    idPlayerManager: String,
    strNationality: String,
    strPlayer: { type: String, required: true },
    strTeam: String,
    strTeam2: String,
    strSport: String,
    intSoccerXMLTeamID: String,
    dateBorn: String,
    strNumber: String,
    dateSigned: String,
    strSigning: String,
    strWage: String,
    strOutfitter: String,
    strKit: String,
    strAgent: String,
    strBirthLocation: String,
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
    strGender: String,
    strSide: String,
    strPosition: String,
    strCollege: String,
    strFacebook: String,
    strWebsite: String,
    strTwitter: String,
    strInstagram: String,
    strYoutube: String,
    strHeight: String,
    strWeight: String,
    intLoved: String,
    strThumb: String,
    strCutout: String,
    strRender: String,
    strBanner: String,
    strFanart1: String,
    strFanart2: String,
    strFanart3: String,
    strFanart4: String,
    strCreativeCommons: String,
    strLocked: String,
    isOnlyImg: Boolean,
  },
  {
    versionKey: false,
    timestamps: true,
  },
);
