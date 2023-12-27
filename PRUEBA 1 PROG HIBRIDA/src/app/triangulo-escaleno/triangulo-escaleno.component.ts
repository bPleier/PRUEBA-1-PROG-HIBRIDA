import { Component, OnInit } from '@angular/core';
import { IonButton, IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FiguraGeometricaComponent } from '../figura-geometrica/figura-geometrica.component';
import { IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-triangulo-escaleno',
  templateUrl: './triangulo-escaleno.component.html',
  styleUrls: ['./triangulo-escaleno.component.scss'],
  standalone: true,
  imports: [IonicModule,FormsModule,CommonModule,IonInput,ReactiveFormsModule, IonButton]
})
export class TrianguloEscalenoComponent extends FiguraGeometricaComponent implements OnInit  {
  ladoA = 0
  ladoB = 0
  ladoC = 0

  constructor(ladoA:number,ladoB:number,ladoC:number) {
    super()
   }
   CalcularPerimetro(ladoA:number, ladoB:number, ladoC:number){
    return ladoA + ladoB + ladoC

   }

  override ngOnInit() {}

}
