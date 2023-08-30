import {Component, OnInit} from '@angular/core';
import {Kurs} from "../../model/kurs-model";
import {DanceCourseService} from "../../dance-course.service";
import {HttpErrorResponse} from "@angular/common/http";
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {RasporedKursa} from "../../model/raspored-kursa-model";
import {MatTableDataSource} from "@angular/material/table";
import {SelectionModel} from "@angular/cdk/collections";
import {Grupa} from "../../model/grupa-model";
import {Router} from "@angular/router";

interface DanUNedelji{
  value: string,
  viewValue:string
}
@Component({
  selector: 'app-add-grupa',
  templateUrl: './add-grupa.component.html',
  styleUrls: ['./add-grupa.component.css']
})
export class AddGrupaComponent implements OnInit{

  kursevi: Kurs[];
  firstFormGroup:FormGroup;
  rasporedForm: FormGroup;
  rasporedi: RasporedKursa[]=[];
  grupa: Grupa;

  ras: RasporedKursa;
  daniUNedelji: DanUNedelji[] = [
    {value: 'Ponedeljak', viewValue: 'Ponedeljak'},
    {value: 'Utorak', viewValue: 'Utorak'},
    {value: 'Sreda', viewValue: 'Sreda'},
    {value: 'Četvrtak', viewValue: 'Četvrtak'},
    {value: 'Petak', viewValue: 'Petak'},
    {value: 'Subota', viewValue: 'Subota'},
    {value: 'Nedelja', viewValue: 'Nedelja'},
  ];
  selectedRow: RasporedKursa;
  selection = new SelectionModel<RasporedKursa>(false, []);
// @ts-ignore
  dataSource:any;
  displayedColumns: string[]= ['danUNedelji','brojCasova','brojSale','vreme','opisKursa'];
  constructor(private service: DanceCourseService,private router: Router) {
    this.dataSource = new MatTableDataSource(this.rasporedi);
  }
  highlight(highlighted: boolean) {
    highlighted = !highlighted;
  }

  getRasporedFromTable(raspored: RasporedKursa){
    this.selectedRow = raspored;
  }
  ngOnInit() {
    this.firstFormGroup = new FormGroup({
      nazivGrupe : new FormControl(null, Validators.required),
      datumPocetkaKursa: new FormControl(null,Validators.required),
      kurs: new FormControl(null, Validators.required)

    });

    this.rasporedForm = new FormGroup({
      danUNedelji: new FormControl(null, Validators.required),
      brojCasova: new FormControl(null, Validators.required),
      brojSale:new FormControl(null, Validators.required),
      vreme:new FormControl(null, Validators.required),
      opisKursa: new FormControl(null, Validators.required)
    })

    this.getKursevi();
  }

  getKursevi(){
    this.service.vratiKurseve().subscribe(
        (response: Kurs[])=>{
          console.log(response);
          this.kursevi=response;
    },
    (error:HttpErrorResponse)=>{
          alert(error.message);
    }
    )
  }



  dodajRasporedUTabelu(rasporedForm: FormGroup) {
    this.ras = rasporedForm.value;
    this.rasporedi.push(this.ras);
    this.dataSource = new MatTableDataSource(this.rasporedi);
    this.rasporedForm.reset();
  }

  sacuvajGrupu(firstFormGroup: FormGroup) {
    this.grupa = firstFormGroup.value;
    console.log(this.grupa)

    this.grupa.rasporediKurseva = this.rasporedi;
    console.log(this.grupa.rasporediKurseva)
    console.log("grupa nakon ubacivanja rasporeda");
    console.log(this.grupa);
    this.service.dodajGrupu(this.grupa).subscribe(
        (response: Grupa)=>{
          console.log(response);
          firstFormGroup.reset();
          this.rasporedi=[];
          this.dataSource = new MatTableDataSource(this.rasporedi);
    },
        (error: HttpErrorResponse)=>{
          alert(error.message);
          firstFormGroup.reset();
          this.rasporedi=[];
          this.dataSource = new MatTableDataSource(this.rasporedi);
        }
    );

    this.router.navigateByUrl("/grupe");

  }

}
