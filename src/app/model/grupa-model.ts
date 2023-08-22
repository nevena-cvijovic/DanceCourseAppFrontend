import {Kurs} from "./kurs-model";
import {RasporedKursa} from "./raspored-kursa-model";

export interface Grupa{

  idGrupe: number;
  nazivGrupe: string;
  datumPocetkaKursa: Date;
  kurs: Kurs;
  rasporediKurseva: RasporedKursa[];
}
