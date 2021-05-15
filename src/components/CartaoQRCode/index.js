import React from 'react';
import QRCode from 'react-qr-code';

const CartaoQRCode = (props) => (
  <div className="cartaozinho">
    <h3>{props.titulo}</h3>
    <QRCode value={props.endereco} />
  </div>
);

export default CartaoQRCode;
