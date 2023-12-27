import { Component } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {  IonicModule } from '@ionic/angular'
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { TrianguloEscalenoComponent } from '../triangulo-escaleno/triangulo-escaleno.component';
import { CirculoComponent } from '../circulo/circulo.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton,IonSelect,IonicModule, 
    IonSelectOption, TrianguloEscalenoComponent, CirculoComponent]
})
export class HomePage {
  opcion : string[] = [
    'Circulo',
    'Triangulo'
  ];
  seleccion: string;
  constructor(){
    this.seleccion=""
  }
}