import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-trikampis',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './trikampis.component.html',
  styleUrl: './trikampis.component.css'
})
export class TrikampisComponent {
  public a: number | null = null;
  public b: number | null = null;
  public c: number | null = null;

  public plotas: number | null = null;

  // public skaiciuok() {
  //   if (this.a != null && this.b != null || this.c != null) {
  //     const p = (this.a + this.b + this.c)/2;
  //     this.plotas = this.x+this.y;
  //     this.x = null;
  //     this.y = null;
  //   }
  }

}



