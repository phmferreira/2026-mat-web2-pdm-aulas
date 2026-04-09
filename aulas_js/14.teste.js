function parsearUsuario(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        // Implemente o tratamento aqui
        return { erro: true, mensagem: "JSON Inválido" };
    }
}

// Testes
console.log(parsearUsuario('{"nome": "João"}')); // Deve funcionar
console.log(parsearUsuario('{"nome": "João"'));  // Deve capturar o erro