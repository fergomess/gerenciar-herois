import { Component, OnInit } from '@angular/core';
import { Vingador } from './vingador';
import '../assets/css/style.css';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title: string;
    id: number;
    description: string;
    vingadores: Array<Vingador>;
    selecionado: Vingador;
    vingadors: Vingador = new Vingador(0, '', '', '');

    constructor() {
        this.title = 'Gerenciar Vingadores';
        this.description = 'Os Vingadores ou no original em inglês Avengers são um grupo de super-heróis de história em quadrinhos publicados nos Estados Unidos pela editora Marvel Comics. O grupo também aparece em adaptações da Marvel para cinema, desenho animado e videogames. Fonte: Wikipedia.';
        this.vingadores = [
            new Vingador(0, 'Capitão América', 'Steve Rogers', 'https://wikimedia.org/Steven_Rogers.jpg'),
            new Vingador(1, 'Viúva Negra', 'Natasha Romanoff','https://wikimedia.org/Negra.png'),
            new Vingador(2, 'Ms. Marvel', 'Carol Danvers','https://wikimedia.org/Carol_Danvers.jpg'),
            new Vingador(3, 'Deadpool', 'Wade Wilson','https://wikimedia.org/Deadpool.jpeg'),
            new Vingador(4, 'Gavião Arqueiro', 'Clint Barton','https://wikimedia.org/Arqueiro.jpg'),
            new Vingador(5, 'Homem Aranha', 'Peter Parker', 'https://wikimedia.org/Homem_Aranha.jpg')
        ];
        this.id = 6;
    }

    ngOnInit(): void {
    }

    heroiSelecionado(vingador: Vingador): void {
        this.selecionado = vingador;
    }

    limpar(){
        this.vingadors = new Vingador(0, '', '', '');
    }

    editHeroi(id){
        this.vingadors = this.vingadores[id];
        
    }

    submit(){
        if(this.vingadors.id > 0){
            var index = this.vingadores.indexOf(this.vingadors);
            this.vingadores[index] = this.vingadors;
            this.limpar();
        }
        else{
            this.vingadores.push(new Vingador(this.id, this.vingadors.nome, this.vingadors.pessoa, this.vingadors.urlFoto));
            this.id = this.id+1;
            this.limpar();
        }   
    }

    deleteHeroi(id){ 
        this.vingadores.splice(id, 1);
        this.limpar();
    }

}
