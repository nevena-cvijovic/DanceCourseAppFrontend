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
import {AxiosService} from "../../axios.service";
import {MatDialog} from "@angular/material/dialog";
import {UspesnoDodataGrupaDialogComponent} from "../uspesno-dodata-grupa-dialog/uspesno-dodata-grupa-dialog.component";
import {
  NeuspesnoDodataGrupaDialogComponent
} from "../neuspesno-dodata-grupa-dialog/neuspesno-dodata-grupa-dialog.component";
import {AuthServiceService} from "../../auth/auth-service.service";

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
   opened = false;

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
  constructor(private service: AxiosService,private router: Router,public dialog: MatDialog, private authService: AuthServiceService) {
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
    this.service.request(
      "GET",
      "/kurs/all",
      {}
    ).then(
      (response)=>{
        this.kursevi = response.data;
      }
    ).catch(
      (error)=>{
        if(error.response.status ===401){
          this.authService.logOut();
        }else{
          this.kursevi = error.response.code;
        }
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
    this.service.request(
      "POST",
      "/grupa/add",
      this.grupa

    ).then(
      (response)=>{
        this.rasporedi=[];
        this.dataSource = new MatTableDataSource(this.rasporedi);
        const dialogRef = this.dialog.open(UspesnoDodataGrupaDialogComponent);

      }
    ).catch(
      (error)=>{
        this.rasporedi=[];
        this.dataSource = new MatTableDataSource(this.rasporedi);
        if(error.response.status ===401){
          this.authService.logOut();
        }else{
         console.log(error.response.code);
         this.dialog.open(NeuspesnoDodataGrupaDialogComponent);
        }
      }
    )


    this.router.navigateByUrl("/grupe");

  }

}
