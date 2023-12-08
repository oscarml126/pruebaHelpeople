// PostulacionPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import '../style/App.css';
import Formulario from './Formulario';

const PostulacionPage = () => {
  const { cargo } = useParams();

  return (
    <div>
        <header >
        Postulación para: {cargo}
      </header>
      <body className='body-form ' >
        <div className='div-form' >
        <Formulario  />
        </div>
      </body>
      
    </div>
  );
};

export default PostulacionPage;
