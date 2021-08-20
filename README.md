## Web Share API Level 2

Teste sobre comportamento do uso da funcionalidade Web Share, para compartilhamento de arquivos, com base em comportamento nativo dos navegadores para dispositivos mobile (iOS e android).

No qual, a proposta satisfaz o uso no sistema android, já no iOs, com funcionamento parcial, devido aos próprios aplicativos, não usarem do mesmo, cabe referencia ao Whatsapp, principal objetivo desse estudo.

### Pré requisitos

Para que a funcionalidade Web Share se ative é necessário que as informações, sejam trafegados no protocolo `HTTPS`. Dessa forma, o ambiente local, foi preparado utilizando express e openssl, para gerar os certificados.

- NodeJs ~LTS~
- Yarn@1 ou NPM@7

#### Iniciando o projeto

1. Instalando as dependencias:
```sh
yarn
```

2. Executando o servidor local:
```sh
yarn start
```

3. Ambiente disponivel no endereço: `https://localhost:3000`
