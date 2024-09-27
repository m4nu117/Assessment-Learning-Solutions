import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);

  // Variantes para las animaciones
  const pageTransitionVariants = {
    initial: { opacity: 0, x: -100 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: 100 },
  };

  const whiteOverlayVariants = {
    hidden: { x: '0%', opacity: 1 },
    visible: { x: '-100%', opacity: 0, transition: { duration: 2 } },
  };

  // Control de transición de páginas
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentPage((prev) => (prev < 3 ? prev + 1 : prev)); // Cambia a la siguiente página
    }, 5000); // Cambia la duración según lo necesites (3s para la franja blanca + 2s para la transición)

    return () => clearTimeout(timer); // Limpiar el temporizador
  }, [currentPage]);

  return (
    <div className="Contenedor_Intro">
      {/* Primera página */}
      {currentPage === 0 && (
        <motion.div
          className="intro1"
          initial="initial"
          animate="in"
          exit="out"
          variants={pageTransitionVariants}
        >
          {/* Aquí tu contenido de la primera página */}
        </motion.div>
      )}

      {/* Segunda página */}
      {currentPage === 1 && (
        <motion.div
          className="intro2"
          initial="initial"
          animate="in"
          exit="out"
          variants={pageTransitionVariants}
        >
          <motion.div
            className="white-overlay"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={whiteOverlayVariants}
          />
          <div className="Paleta1">
            <img src="/Imagenes/Paleta colores.png" alt="Paleta de colores" />
          </div>
          <motion.div className="mujerbolso">
            <img src="/Imagenes/Mujer_bolso.png" alt="Mujer con bolso" />
          </motion.div>
          <motion.div className="mujerbolsos">
            <img src="/Imagenes/Mujer_bolsos.png" alt="Mujer con bolsos" />
          </motion.div>
          <motion.div className="mujervaso">
            <img src="/Imagenes/Mujer_vaso.png" alt="Mujer con vaso" />
          </motion.div>
          <motion.div className="mujerbolsoblanco">
            <img src="/Imagenes/Mujer_bolsoblanco.png" alt="Mujer con bolso blanco" />
          </motion.div>
        </motion.div>
      )}

      {/* Tercera página */}
      {currentPage === 2 && (
        <motion.div
          className="intro3"
          initial="initial"
          animate="in"
          exit="out"
          variants={pageTransitionVariants}
        >
          <div className="Paleta2">
            <img src="/Imagenes/Paleta colores.png" alt="Paleta de colores" />
          </div>
          <motion.div className="mujerbolso2">
            <img src="/Imagenes/Mujer_bolso.png" alt="Mujer con bolso" />
          </motion.div>
          <motion.div className="mujerbolsos2">
            <img src="/Imagenes/Mujer_bolsos.png" alt="Mujer con bolsos" />
          </motion.div>
          <motion.div 
            className="Mujerjoven2"
            initial={{ y: 100, opacity: 0 }} // Sale desde abajo
            animate={{ y: 0, opacity: 1 }} // Se mueve hacia arriba y aparece
            transition={{ duration: 1 }} // Suaviza la animación
          >
            <img src="/Imagenes/Young_woman.png" alt="Mujer Joven posando" />
          </motion.div>
          <motion.div 
            className="mujervaso2"
            initial={{ x: 0 }} // Posición inicial
            animate={{ x: 50 }} // Mover a la derecha
            transition={{ duration: 1 }} // Duración de movimiento
          >
            <img src="/Imagenes/Mujer_vaso.png" alt="Mujer con vaso" />
          </motion.div>
          <motion.div 
            className="mujerbolsoblanco2"
            initial={{ x: 0 }} // Posición inicial
            animate={{ x: 50 }} // Mover a la derecha
            transition={{ duration: 1 }} // Duración de movimiento
          >
            <img src="/Imagenes/Mujer_bolsoblanco.png" alt="Mujer con bolso blanco" />
          </motion.div>
        </motion.div>
      )}

      {/* Cuarta página */}
      {currentPage === 3 && (
        <motion.div
          className="intro4"
          initial={{ x: window.innerWidth, opacity: 0 }} // Inicia fuera de la pantalla
          animate={{ x: 0, opacity: 1 }} // Se mueve hacia la izquierda y aparece
          exit={{ x: window.innerWidth, opacity: 0 }} // Se mueve fuera de la pantalla
          transition={{ duration: 1 }} // Duración más suave
        >
          <div className="headerlinetop">
            <img src="/Imagenes/Header_lear.png" alt="Linea superior" />
          </div>
          <div className="Textolearning">
            <h1>LEARNING SOLUTIONS</h1>
          </div>
          <div className="footerlinebottom">
            <img src="/Imagenes/Footer_learning.png" alt="Linea inferior" />
          </div>
        </motion.div>
      )}
 {/* Quinta página - Welcome */}
 {currentPage === 4 && (
        <motion.div
          className="Welcome"
          initial={{ opacity: 0, x: 100 }} // Inicia desde la derecha
          animate={{ opacity: 1, x: 0 }} // Se mueve hacia la izquierda y aparece
          exit={{ opacity: 0, x: -100 }} // Sale hacia la izquierda
          transition={{ duration: 1 }} // Suaviza la animación
        >
          <div className="headerwelcome"></div>
          <div className="bodywelcome">
            <div className="MenuWelcome">
              <h2 className="MenuLob">Menu (LOB)</h2>
              <ul>
                <li className="ListaMenu">Sales Team Documents</li>
                <li className="ListaMenu">Customer Experience Team Documents</li>
                <li className="ListaMenu">Home Care Team Documents</li>
                <li className="ListaMenu">Product Training</li>
                <li className="ListaMenu">Belong Culture</li>
              </ul>
            </div>
            <div className="LearningText">
              <div>Welcome to</div>
              <div><img src="/Imagenes/Line_color.png" alt="Linea Learning" /></div>
              <div>LEARNING SOLUTIONS</div>
              <div>You can search for a specific topic with the top bar or browse in the side menu.</div>
            </div>
            <div className="Mujergafas">
              <img src="/Imagenes/Mujer_gafas.png" alt="Mujer con gafas" />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}