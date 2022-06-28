import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import perfil from './download.png'
import CardPequeno from './components/CardPequeno/CardPequeno';
import email from './561188.png'
import local from './img_413790.png'
import estagio from './carteira-de-identidade.png'
import faculdade from './estagio.png'
function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {perfil} 
          nome="Kayo Céshar" 
          descricao="Oi, eu sou o Kayo Céshar. Sou estudante da Labenu. Estou amando essa experiência de estudar programação e a cada dia me animo mais com as minhas conquistas."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
        imagem= {email}
        mensagem = "Email:"
        email = "kayoceshar@hotmail.com"
        />
        <CardPequeno
        imagem= {local}
        mensagem = "Endereço:"
        email = "Rua José Omena Barbosa"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={estagio} 
          nome="Estagiário" 
          descricao="Trabalho no INSS como estagiário de TI." 
        />
        
        <CardGrande 
          imagem={faculdade} 
          nome="Faculdade" 
          descricao="Estudo Sistemas de Informação na Estácio." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
