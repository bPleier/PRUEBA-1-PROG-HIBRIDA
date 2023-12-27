import { Component, OnInit } from '@angular/core';
import { FiguraGeometricaComponent } from '../figura-geometrica/figura-geometrica.component';
import { IonButton, IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [IonicModule,FormsModule,CommonModule, IonButton, IonInput,ReactiveFormsModule]     
})
export  class CirculoComponent extends FiguraGeometricaComponent implements OnInit {
  txtPerimetro = ""
  diametro = 0
  perimetro = 0

  constructor(diametro:number){
  super()
}
  CalcularPerimetro(diametro:number){
    this.perimetro = Math.PI ** this.diametro
    return Math.PI ** this.diametro
  }
  perimetroValido(){
    return !isNaN(this.perimetro)
  }

  override ngOnInit() {}

}
