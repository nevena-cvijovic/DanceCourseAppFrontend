import {Grupa} from "./grupa-model";

export interface RasporedKursa{
  grupa:Grupa;
  danUNedelji: string;
  brojCasova:number;
  opisKursa: string;
  brojSale: number;
  vreme: string;
}
