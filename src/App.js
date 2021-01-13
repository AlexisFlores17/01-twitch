import { Seccion1 } from './componentes/Seccion1';
import { Seccion2 } from './componentes/Seccion2';
import { Seccion3 } from './componentes/Seccion3';
import { Seccion4 } from './componentes/Seccion4';
import lax from "lax.js";
import React,{useEffect} from 'react';
import './style/index.scss';

function App() {

  useEffect(() => {

    //inicia lax
    lax.init();

    //Empezar a escuchar el scroll en Y
    lax.addDriver("scrollY", function () {
      return window.scrollY;
    });

    //añadir elementos de lax

    // lax.addElements(
    //   ".Header",
    //   {
    //     scrollY: {
    //       // translateY:[
    //       //   [0, 'screenHeight'],
    //       //   [0, 'screenHeight']
    //       // ],
    //       opacity:[
    //         [0, 'screenHeight/2'],
    //         [1, 0]
    //       ]
    //     }
    //   },
    //   []
    // );

    
    lax.addElements(
      ".textoSec2",
      {
        scrollY: {
          opacity:[
            ["screenHeight/2", 'screenHeight','(screenHeight/2)*3'],
            [0,1,0]
          ],
        }
      },
      []
    );

  }, []);

  return (
      <div className="App">

          <Seccion1 />

          <Seccion2 />

          <Seccion3 />

          <Seccion4 />
      </div>
  );
}

export default App;
