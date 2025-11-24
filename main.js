function Veiculo(cor, modelo, fabricante, rodas) {
	this.cor = cor;
	this.modelo = modelo;
	this.fabricante = fabricante;
	this.rodas = rodas;
}

function Carro(cor, modelo, fabricante, rodas) {
	Veiculo.call(this, cor, modelo, fabricante, rodas);
}

function Moto(cor, modelo, fabricante, rodas) {
	Veiculo.call(this, cor, modelo, fabricante, rodas);
}

const v1 = new Carro("Amarelo", "Corvette ZR1", "Chevrolet", 4);
const v2 = new Moto("Prata", "GSX-8R", "Suzuki", 2);

console.log(v1);
console.log(v2);
