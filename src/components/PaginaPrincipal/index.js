import React from 'react';
import CartaoQRCode from '../CartaoQRCode/';

function novoCardQRCode(nome, url) {
  return <CartaoQRCode titulo={nome} endereco={url} />;
}

const PaginaPrincipal = () => (
  <div className="instrucoes-topo">
    <h1>Gerador de QR Code!</h1>
    <h2>
      Instruções: coloque a o nome e a url na caixa abaixo e clique em gerar QR
      Code. Um novo card com o QR Code irá aparecer.
    </h2>

    <label>Nome</label>
    <input name="nome" type="text" />
    <label>URL</label>
    <input name="url" type="text" />
    <button name="botao" onClick={novoCardQRCode('titulo', 'URL')}>
      Enviar
    </button>
  </div>
);

export default PaginaPrincipal;
