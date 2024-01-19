import { Categorie } from "./categorie";
import { Proprietaire } from "./proprietaire";

export class Terrain {
id : number | undefined;
mc : number | undefined;
proprietaire : Proprietaire | undefined;
categorie : Categorie | undefined;
}
