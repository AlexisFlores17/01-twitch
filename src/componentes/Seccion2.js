import React,{useEffect} from 'react';
import Typewriter from 'typewriter-effect/dist/core';

export const Seccion2 = () =>{

    useEffect(() => {
        new Typewriter('.textoSec2', {
            strings: ['Hello', 'World'],
            autoStart: true,
            loop:true,
          });
    }, [])
    return(
        <div className="Seccion Seccion2" >
            <div className="CuerpoS2" ><h1 className="textoSec2">Cuerpo seccion 2</h1></div>
        </div>
    );
}