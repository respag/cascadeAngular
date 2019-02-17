import { Component, OnInit } from '@angular/core';
import SampleJson from '../assets/ciudades.json';
import { Pais } from './pais.js';
import { Provincia } from './provincia.js';
    
    @Component({
  	selector: 'app-root',
  	templateUrl: './app.component.html',
  	styleUrls: ['./app.component.css']
	})
	export class AppComponent implements OnInit {
    paises=[];
    provincias=[];
    ciudades=[];
    title = 'Ejemplo de DropDownList en cascada';
    selectedPais: Pais =  new Pais('','');
    selectedProvincia: Provincia =  new Provincia('','');
  
  	ngOnInit(): void {
    	console.log('Leyendo el archivo Json:');
    	console.log(SampleJson);
   	  SampleJson.forEach(el => {
      	this.paises.push(el.pais);
      });
      console.log('Arreglo de Países:');                        
      console.log(this.paises);
      this.onSelectPais(this.selectedPais.nombre);
      this.onSelectProvincia(this.selectedProvincia.nombre);
      }

      onSelectPais(pais){ 
        this.provincias = [];
        SampleJson.forEach(element => {
          if (element.pais == pais) {
            this.provincias.push(element.provincia);
          }
        });
        console.log(`Provincias de ${pais}: ${this.provincias}`)
     }

     onSelectProvincia(provincia){
      this.ciudades=[]; 
      SampleJson.forEach(element => {
        if(element.provincia == provincia){
          this.ciudades.push(element.ciudad);
        }
      });
      console.log(`Ciudades de ${provincia}: ${this.ciudades }`)
    }
  }