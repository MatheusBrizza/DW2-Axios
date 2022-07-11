import * as React from 'react';
import './style.css';
import axios from 'axios';
import { useState } from 'react';

function buscarDados(usuario) {
  const url = `https://api.github.com/users/${usuario}`;
  const resultado = axios.get(url);
  return resultado;
}

export default function App() {
  const [nome, setNome] = useState('');

  buscarDados('mathiasgheno').then((resultado) => {
    const nome = resultado.data.name;
    setNome(nome);
  });

  return (
    <div>
      <h1>Nome: {nome}</h1>
    </div>
  );
}
