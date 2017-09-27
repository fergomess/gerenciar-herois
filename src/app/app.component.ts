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
    editando = false;

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
        this.id = 5;
    }

    ngOnInit(): void {
    }

    heroiSelecionado(vingador: Vingador): void {
        this.selecionado = vingador;
    }

    editHeroi(heroi: Vingador): void{
        this.vingadors = heroi;
        this.editando = true;
        
    }

    submit(novo: Vingador): void{
        if (!this.editando) {
            const novoId: number = ++this.id;
            this.vingadores.push(new Vingador(novoId, novo.nome, novo.pessoa, novo.urlFoto));
            this.vingadors = new Vingador(0, '', '', '');
        } else {
            this.vingadors = new Vingador(0, '', '', '');
            this.editando = false;
        }   
    }

    deleteHeroi(heroi: Vingador): void{ /* não é obrigatório declarar o tipo de retorno nem mesmo o tipo do parâmetro */
        this.vingadores.splice(this.vingadores.indexOf(heroi), 1); //esse segundo parâmetro é a quantidade de objetos que deseja excluir
        this.vingadors = new Vingador(0, '', '', '');
    }

}
