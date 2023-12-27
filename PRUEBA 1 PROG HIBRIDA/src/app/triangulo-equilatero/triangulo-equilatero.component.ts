import { Component, OnInit } from '@angular/core';
import { IonButton, IonicModule, IonSelectOption} from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TrianguloEscalenoComponent } from '../triangulo-escaleno/triangulo-escaleno.component';
import { IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-triangulo-equilatero',
  templateUrl: './triangulo-equilatero.component.html',
  styleUrls: ['./triangulo-equilatero.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, IonButton,IonInput,ReactiveFormsModule]
})
export class TrianguloEquilateroComponent extends TrianguloEscalenoComponent implements OnInit {
  override ladoA = 0

  constructor(ladoA:number) {
    super()
   }
   CalcularPerimetro(ladoA:number){
    return ladoA ** 3

   }

  override ngOnInit() {}

}
