import React,{useEffect} from 'react';
import Typewriter from 'typewriter-effect/dist/core';
import lax from "lax.js";

export const Seccion1 = () =>{
    useEffect(() => {
        new Typewriter('.TextoHeader', {
            strings: ['3 Boys one Code', '3 boy one cup?'],
            autoStart: true,
            loop:true,
          });

        //Lax


        lax.init();


        lax.addDriver("scrollY", function () {
        return window.scrollY;
        });

        lax.addElements(
            ".imagenSec1",
            {
                scrollY: {
                translateY:[
                  [0, 'screenHeight'],
                  [-150 ,150 ]
                ],
                // opacity:[
                //     [0, 'screenHeight/2'],
                //     [1, 0]
                // ]
                }
            }
        );
    }, [])
    return(
        <div className="Seccion Seccion1" >
            <header className="Header"><h1 className="TextoHeader"></h1></header>
            <div className="CuerpoS1">
                <div className="Columnas" >
                    <div className="imagenCuerpo1"></div>
                </div>
                <div className="Columnas" >
                    <p>Eiusmod excepteur ipsum et aliqua non non et veniam aliqua commodo ea labore pariatur est. Ea et anim pariatur magna esse voluptate anim cillum do. Exercitation pariatur labore excepteur sunt consequat non elit quis esse Lorem. Nisi esse in tempor aliqua laborum velit dolor.</p>
                </div>
            </div>
            <div className="imagenSec1"></div>
        </div>
    );
}