import {Korisnik} from "./korisnik-model";
import {Kurs} from "./kurs-model";
import {Grupa} from "./grupa-model";

export  interface Prijava{
  korisnik: Korisnik;
  kurs: Kurs;
  datumPrijave: Date;
  napomena: string;
  grupa: Grupa;
}
