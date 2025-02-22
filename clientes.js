// Criando a classe do telefone celular
class TelefoneCelular {
  constructor(ddd, numero) {
    this.ddd = ddd;
    this.numero = numero;
  }
}

// Criando a classe do endereço
class Endereco {
  constructor(estado, cidade, rua, numero) {
    this.estado = estado;
    this.cidade = cidade;
    this.rua = rua;
    this.numero = numero;
  }
}

// Criando a classe do cliente
class Cliente {
  constructor(nome, telefoneCelular, email, endereco) {
    this.nome = nome;
    this.telefoneCelular = telefoneCelular;
    this.email = email;
    this.endereco = endereco;
  }
}

// Criando uma lista de clientes
let clientes = [];

// Adicionando clientes na lista
let cliente1 = new Cliente(
  "Carlos Conrado",
  new TelefoneCelular("11", "999999999"),
  "carlos@email.com",
  new Endereco("SP", "São Paulo", "Rua A", "123")
);
clientes.push(cliente1);

let cliente2 = new Cliente(
  "Fernanda Silva",
  new TelefoneCelular("21", "988776655"),
  "fernanda@email.com",
  new Endereco("RJ", "Rio de Janeiro", "Rua B", "456")
);
clientes.push(cliente2);

let cliente3 = new Cliente(
  "Marcelo Souza",
  new TelefoneCelular("31", "977665544"),
  "marcelo@email.com",
  new Endereco("MG", "Belo Horizonte", "Rua C", "789")
);
clientes.push(cliente3);

// Exibindo os clientes
console.log("Lista de Clientes:");
clientes.forEach((cliente) => {
  console.log("Nome: " + cliente.nome);
  console.log("Email: " + cliente.email);
  console.log(
    "Telefone: (" +
      cliente.telefoneCelular.ddd +
      ") " +
      cliente.telefoneCelular.numero
  );
  console.log(
    "Endereço: " +
      cliente.endereco.rua +
      ", " +
      cliente.endereco.numero +
      " - " +
      cliente.endereco.cidade +
      "/" +
      cliente.endereco.estado
  );
  console.log("-------------------------");
});

// Exibindo nomes em maiúsculas
console.log("Nomes dos clientes em maiúsculas:");
clientes.forEach((cliente) => console.log(cliente.nome.toUpperCase()));

// Exibindo nomes em minúsculas
console.log("Nomes dos clientes em minúsculas:");
clientes.forEach((cliente) => console.log(cliente.nome.toLowerCase()));

// Exibindo apenas os telefones
console.log("Telefones dos clientes:");
clientes.forEach((cliente) =>
  console.log(
    "(" + cliente.telefoneCelular.ddd + ") " + cliente.telefoneCelular.numero
  )
);

// Exibindo apenas os endereços
console.log("Endereços dos clientes:");
clientes.forEach((cliente) =>
  console.log(
    cliente.endereco.rua +
      ", " +
      cliente.endereco.numero +
      " - " +
      cliente.endereco.cidade +
      "/" +
      cliente.endereco.estado
  )
);
