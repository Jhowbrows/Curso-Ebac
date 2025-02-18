class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    mostrarInfo() {
        console.log(`Veículo: ${this.marca}, ${this.modelo}, Ano: ${this.ano}`);
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, ano, portas) {
        super(marca, modelo, ano);
        this.portas = portas;
    }

    mostrarInfo() {
        console.log(`Carro: ${this.marca}, ${this.modelo}, Ano: ${this.ano}, Portas: ${this.portas}`);
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, ano, cilindrada) {
        super(marca, modelo, ano);
        this.cilindrada = cilindrada;
    }

    mostrarInfo() {
        console.log(`Moto: ${this.marca} - ${this.modelo}, Ano: ${this.ano}, Cilindrada: ${this.cilindrada}cc`);
    }
}

class Caminhão extends Veiculo {
    constructor(marca, modelo, ano, cavalos) {
        super(marca,modelo);
        this.ano = ano;
        this.cavalos = cavalos;
    }

    mostrarInfo() {
        console.log(`Caminhão: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, Cavalos: ${this.cavalos}`);
    }
}

const carro1 = new Carro('BMW', '330i', 2022, 4);
const carro2 = new Carro('Audi', 'A4 Premium', 2023, 4);
const moto1 = new Moto('Ducati', 'Panigale V4',2021, 1103);
const caminhão1 = new Caminhão('Volvo', "FH16", 2022, 750);

carro1.mostrarInfo();
carro2.mostrarInfo();
moto1.mostrarInfo();
caminhão1.mostrarInfo();