module.exports = {
  bail: true, //se um teste falhar ele para de executar os testes, ao contrário ele continua executando o código
  coverageProvider: 'v8',
  testeMatch: [
    '<rootDir>/src/**/*.spec.js' //dentro de qualquer pasta vai ter um arquivo com qualquer nome onde sua extensão tem nome .spec.js, <rootDir> faz pegar a raiz do projeto, eliminando o teste em pastas desenecessárias. Dizendo que da raiz do projeto, olhe para dentro da pasta src, pulando node_modules
  ]
}