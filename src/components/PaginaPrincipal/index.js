import React, { useState } from 'react';
import CartaoQRCode from '../CartaoQRCode/';

const PaginaPrincipal = () => {
  const [nome, setNome] = useState('');
  const [url, setUrl] = useState('');
  const [cartoes, setCartoes] = useState([]);

  function novoCardQRCode(nome, url) {
    let card = {
      nome: nome,
      url: url,
      id: new Date().getTime(),
    };

    let novoArranjoDeCartoes = [...cartoes];

    novoArranjoDeCartoes.push(card);

    setCartoes(novoArranjoDeCartoes);
  }

  const onChangeNome = (event) => {
    setNome(event.target.value);
  };

  const onChangeUrl = (event) => {
    setUrl(event.target.value);
  };

  return (
    <div className="instrucoes-topo">
      <h1>Gerador de QR Code!</h1>
      <p>
        Instruções: coloque a o nome e a url na caixa abaixo e clique em gerar
        QR Code. Um novo card com o QR Code irá aparecer.
      </p>

      <label>Nome</label>
      <input name="nome" type="text" onChange={onChangeNome} />
      <label>URL</label>
      <input name="url" type="text" onChange={onChangeUrl} />
      <button
        type="button"
        name="botao"
        onClick={() => novoCardQRCode(nome, url)}
      >
        Enviar
      </button>

      {cartoes.map((card) => (
        <CartaoQRCode key={card.id} titulo={card.nome} endereco={card.url} />
      ))}
    </div>
  );
};

export default PaginaPrincipal;
