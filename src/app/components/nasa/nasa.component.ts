import { Component, OnInit } from '@angular/core';
import { NasaService } from '../../Service/nasa.service';


@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.css']
})
export class NasaComponent implements OnInit {

  public  nasaData : any = "";

  constructor(private _NasaService: NasaService) { }

  ngOnInit(): void {
    this.getStarNasa();
  }

  getStarNasa (){

    this._NasaService.getSpaceData()
    .subscribe
    (
      response =>{
        if(response){
          this.nasaData = response;
        }
      },
      error =>{
        console.log(<any>error);
      }
    );

  }
}
