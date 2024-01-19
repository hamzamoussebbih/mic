import { Categorie } from "./categorie";
import { Proprietaire } from "./proprietaire";
import { Taux } from "./taux";
import { Terrain } from "./terrain";

export class Taxetnb {
  id !: number;
  label !: String;
  description !: String;
  tnbyear !: number;
  montantbase !: number;
  terrain : Terrain | undefined;
  proprietaire : Proprietaire | undefined;
  categorie : Categorie | undefined;
  taux : Taux | undefined;
}
