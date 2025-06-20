import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const data = ReactDOM.createRoot(document.getElementById('root'));

data.render(
  <> // We are using this for using without any div element. 
  {/* Customized tag by self */}
    <App/> 
    <App/>
    <App/>
  </>
);