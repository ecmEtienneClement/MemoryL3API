export class ValidatorMessages {
  /**                        METHODES MESSAGE FOR MODELS                             */
  //
  public static notEmptyMsg(propretiModel: string): string {
    return `${propretiModel} ne peut étre vide.`;
  }
  //
  public static notNullMsg(propretiModel: string): string {
    return `${propretiModel} est requise.`;
  }
  //
  public static lenMsg(
    propretiModel: string,
    lenModel: string = "2 à 25"
  ): string {
    return `${propretiModel} doit étre comprise entre ${lenModel} lettres.`;
  }
  //
  public static lenPhoneMsg(): string {
    return `Le numéro est incorrect.`;
  }
  //
  public static isEmailMsg(): string {
    return `Le format d'e-mail est incorrect.`;
  }
  //
  public static uniqueMsg(propretiModel: string): string {
    return `Désoler ${propretiModel} existe déja.`;
  }
  //
  public static ageMinMsg(): string {
    return `Désoler age minimale est de 18 ans.`;
  }
  //
  public static ageMaxMsg(): string {
    return `Désoler age maximale est de 80 ans.`;
  }
}
