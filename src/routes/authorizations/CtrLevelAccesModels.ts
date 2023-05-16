import AllProfil, { LevelCRUD, NamesProfiles } from "./LevelAccesModels";

export default (
  httpMethode: string,
  profile: string,
  nameModel: string,
  next: any
): boolean => {
  const listModelsProfil: Map<string, LevelCRUD> = AllProfil.listProfil.get(
    NamesProfiles.infirmier
  );
  //TODO
  //Cas ou le profil dans le token n'est pas sur la liste profil
  if (!listModelsProfil) {
    const customError = new Error();
    customError.name = "Profil";
    customError.message = "Ce profil n'existe pas ";
    throw customError;
  }
  //TODO
  //Cas ou le model dans le path n'est pas sur la liste model
  const levelAccesModelProfil = listModelsProfil.get(nameModel);
  if (!levelAccesModelProfil) {
    const customError = new Error();
    customError.name = "Model";
    customError.message = "Ce model n'existe pas ";
    throw customError;
  }
  //TODO
  //List des methodes http
  const listMethodesHttp = AllProfil.httpMethodesForLevelAcces.get(
    levelAccesModelProfil
  );
  //TODO
  //On verifi si cette methode fait partie des methodes autorisées

  if (!listMethodesHttp.includes(httpMethode)) {
    const customError = new Error();
    customError.name = "No Acces";
    customError.message = "Vous n'êtes pas autorisé à effectuée cette action.";
    throw customError;
  }
  //TODO
  // Si acces autorisé
  return true;
};
