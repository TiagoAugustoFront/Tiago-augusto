import React from 'react';
import Perfil from '../assets/perfil.jpeg';
import Linkedin from '../assets/linkedin.svg';
import Github from '../assets/github.svg';
import HTML from '../assets/html5.svg';
import CSS from '../assets/css.svg';
import Javascript from '../assets/javascript.svg';
import Java from '../assets/java.svg';
import ReactIcon from '../assets/favicon.ico';

import './Landing.css'

const Landing = () =>{
    return(
        <div className="container">
            <header className="header">
                <img src={Perfil} alt="Tiago Augusto" className="img"/>
                <h1 className="name"><span className="highlight">&lt;</span>Tiago Augusto<span className="highlight">/&gt;</span></h1>
                <p className="text-profile">Jovem cristão, amante de tecnologias, curioso, comunicativo por natureza e apaixonado
                    por conhecer novas
                    pessoas. O desconhecido sempre foi um desafio e por mais complexas que sejam as coisa elas jamais me farão
                    parar,
                    pois sei que carregamos dentro de nós qualidades extraordinárias.</p>
                <ul class="social-networks">
                    <li><a><img src={Linkedin} alt=""/></a></li>
                    <li><a><img src={Github} alt=""/></a></li>
                </ul>
            </header>
            
            <main className="main">
                <div className="knowledge">
                    <h2 className="knowledge-title">Conhecimentos</h2>
                    <ul className="knowledge-list">
                        <li><button id="htmlBtn"><img src={HTML} alt=""/></button></li>
                        <li><button id="cssBtn"><img src={CSS} alt=""/></button></li>
                        <li><button id="jsBtn"><img src={Javascript} alt=""/></button></li>
                        <li><button id="javaBtn"><img src={ReactIcon} alt=""/></button></li>
                    </ul>


                    <h2 className="knowledge-title">Formação acadêmica / Certificados</h2>
                    <ul className="knowledge-list-certificates">
                        <li>Faculdade Uninassau, Recife - Cursando Superior em Análise e Desenvolvimento de Sistemas</li>
                        <li>Instituto Federal de Pernambuco(IFPE), Jaboatão - Técnico em Informática para Internet (completo)</li>
                    </ul>
                </div>

            </main>
        </div>
    )
};

export default Landing;