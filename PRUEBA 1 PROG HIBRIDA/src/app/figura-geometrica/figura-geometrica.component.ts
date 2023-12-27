import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  IonicModule } from '@ionic/angular';
import { IonButtons, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-figura-geometrica',
  templateUrl: './figura-geometrica.component.html',
  styleUrls: ['./figura-geometrica.component.scss'],
  standalone: true,
  imports: [IonicModule,FormsModule,CommonModule,IonInput,ReactiveFormsModule, IonButtons]
  
})
export abstract class FiguraGeometricaComponent  implements OnInit {
  nombre = ""

  constructor() { }
   calcularPerimetro(): number

ngOnInit() {}

}
