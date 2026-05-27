function Usuario(id, nome) {
    this.nome = nome;
    Object.defineProperty(this, 'id', {
        enumerable: true,
        value: id,
        writable: false,
        configurable: false
    })
}


const maria = new Usuario(1, 'Maria');
console.log(maria);
maria.id = 2;
console.log(maria);
delete maria.id;
console.log(maria);

