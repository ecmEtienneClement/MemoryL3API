//****************************ETIENNE CLEMENT MBAYE***************************************** */

//Nivaux d'acces des models [CRUD]
import { NameModels } from "../../models/initModels/nameModels";

//Les differents profiles
export enum NamesProfiles {
  admin = "admin",
  medecin = "medecin",
  infirmier = "infirmier",
  secretaire = "secretaire",
}
//Les differents combinaisons d'actions
export enum LevelCRUD {
  All = "*",
  R = "R",
  RU = "RU",
  RUD = "RUD",
  CRU = "CRU",
  None = "/",
}
//Les differents methodes http
enum methodeHttp {
  Post = "POST",
  Get = "GET",
  Put = "PUT",
  Delete = "DELETE",
}

//*******************************ALL PROFIL*************************** */
export default class AllProfil {
  public static listProfil: Map<string, Map<string, LevelCRUD>> = new Map([
    [NamesProfiles.medecin, AllProfil.medecin()],
    [NamesProfiles.infirmier, AllProfil.infirmier()],
    [NamesProfiles.secretaire, AllProfil.secretaire()],
  ]);
  //Les differents methodes disponibles dans les niveaux d'acces
  public static httpMethodesForLevelAcces: Map<string, String[]> = new Map<
    string,
    String[]
  >([
    [
      LevelCRUD.All,
      [methodeHttp.Post, methodeHttp.Get, methodeHttp.Put, methodeHttp.Delete],
    ],
    [LevelCRUD.R, [methodeHttp.Get]],
    [LevelCRUD.RU, [methodeHttp.Get, methodeHttp.Put]],
    [LevelCRUD.RUD, [methodeHttp.Get, methodeHttp.Put, methodeHttp.Delete]],
    [
      LevelCRUD.CRU,
      [methodeHttp.Post, methodeHttp.Get, methodeHttp.Put, methodeHttp.Delete],
    ],
    [LevelCRUD.None, ["None"]],
  ]);
  //TODO
  public static admin() {
    //ACCESS ALL MODEL OBJECTS [CRUD]
  }
  //TODO
  public static medecin(): Map<string, LevelCRUD> {
    //List des models restreint pour le profil medecin
    return new Map([
      [NameModels.antecedent, LevelCRUD.All],
      [NameModels.compteBloque, LevelCRUD.None],
      [NameModels.consultation, LevelCRUD.All],
      [NameModels.dossierPatient, LevelCRUD.All],
      [NameModels.historiqueMessage, LevelCRUD.All],
      [NameModels.infoClinique, LevelCRUD.R],
      [NameModels.message, LevelCRUD.All],
      [NameModels.ordonnance, LevelCRUD.All],
      [NameModels.patient, LevelCRUD.All],
      [NameModels.payement, LevelCRUD.None],
      [NameModels.personnel, LevelCRUD.R],
      [NameModels.poste, LevelCRUD.R],
      [NameModels.rendezVous, LevelCRUD.All],
      [NameModels.salle, LevelCRUD.R],
      [NameModels.typeDeSalle, LevelCRUD.R],
      [NameModels.typeRendezVous, LevelCRUD.R],
    ]);
  }
  //TODO
  public static infirmier(): Map<string, LevelCRUD> {
    //List des models restreint pour le profil infirmier
    return new Map([
      [NameModels.antecedent, LevelCRUD.All],
      [NameModels.compteBloque, LevelCRUD.None],
      [NameModels.consultation, LevelCRUD.All],
      [NameModels.dossierPatient, LevelCRUD.All],
      [NameModels.historiqueMessage, LevelCRUD.All],
      [NameModels.infoClinique, LevelCRUD.R],
      [NameModels.message, LevelCRUD.All],
      [NameModels.ordonnance, LevelCRUD.R],
      [NameModels.patient, LevelCRUD.R],
      [NameModels.payement, LevelCRUD.None],
      [NameModels.personnel, LevelCRUD.R],
      [NameModels.poste, LevelCRUD.R],
      [NameModels.rendezVous, LevelCRUD.R],
      [NameModels.salle, LevelCRUD.R],
      [NameModels.typeDeSalle, LevelCRUD.R],
      [NameModels.typeRendezVous, LevelCRUD.R],
    ]);
  } //TODO
  public static secretaire(): Map<string, LevelCRUD> {
    //List des models restreint pour le profil secretaire
    return new Map([
      [NameModels.antecedent, LevelCRUD.None],
      [NameModels.compteBloque, LevelCRUD.None],
      [NameModels.consultation, LevelCRUD.None],
      [NameModels.dossierPatient, LevelCRUD.All],
      [NameModels.historiqueMessage, LevelCRUD.All],
      [NameModels.infoClinique, LevelCRUD.All],
      [NameModels.message, LevelCRUD.All],
      [NameModels.ordonnance, LevelCRUD.None],
      [NameModels.patient, LevelCRUD.All],
      [NameModels.payement, LevelCRUD.All],
      [NameModels.personnel, LevelCRUD.All],
      [NameModels.poste, LevelCRUD.All],
      [NameModels.rendezVous, LevelCRUD.All],
      [NameModels.salle, LevelCRUD.All],
      [NameModels.typeDeSalle, LevelCRUD.All],
      [NameModels.typeRendezVous, LevelCRUD.All],
    ]);
  }
}
