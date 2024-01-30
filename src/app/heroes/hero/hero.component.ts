import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent{
    public name: string ='Spiderman';
    public age: number =45;

    get capitalizedName():string{
      return this.name.toUpperCase();
    }

    getHeroDescription():string{
      return `${this.name} - ${this.age}`
    }

    changeNamehero():void{
      this.name='ironman';
    }

    changeAge(): void{
      this.age=35;
    }

    resetForm(): void{
      this.name='Spiderman';
      this.age=45;
    }
}
