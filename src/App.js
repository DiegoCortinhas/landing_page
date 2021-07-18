import React, {useState} from "react";
import "./styles.css";

export default function App() {
  return(
        <div id='body'>
            <Header/>
            

            <Card 
                className='section bg-grey'
                img='./pcgamer.PNG' 
                title='PC Gamer '
                description='PC gamer i7 8GB SSD 120GB Placa de video GT 710 2GB.'
                price='R$ 2500,00'
            />

            <Card 
                className='section'
                img='./play5.PNG' 
                title='Console Playstation 5 - Ps5' 
                description='Console PlayStation 5 Versão com Disco, entretenimento garantido, 
                             Nova geração com SSD de alta velocidade, processador e memoria de alta performace e placa gráfica de ultima geração, novos desafios, 
                             poderá reproduzir música, assistir seus filmes e séries.'
                price='R$ 6000,00'
            />

            <Card 
                className='section bg-grey'
                img='./play4.PNG' 
                title='Console PlayStation 4 Slim - 1TB' 
                description='Console PlayStation 4 Slim 1TB Mega Pack 3 Jogos Fantásticos - 
                             Ghost of Tsushima + God of War + Ratchet & Clank + PSN Plus 3 Meses.'
                price='R$ 3000,00'
            />

            <Card 
                className='section'
                img='./switch.PNG' 
                title='Console Nintendo Switch - 32GB' 
                description='Console Nintendo Switch - Base do Nintendo Switch - Joy-Con Azul/Vermelho (Esquerdo/Direito) - 
                             Suporte para Joy-Con - Alças Joy-Con - Cabo HDMI - Adaptador AC'
                price='R$ 3000,00'
            />
            <ContactContainer/>
        </div>
    );
}

const Header = () =>{
    
    return(
        
        <div className='header'>
            <div className="header-text2" align='right' >
                <a href="https://www.thanoslu.com.br/cadastro">Entre ou Cadastre-se</a>
            </div>

            <img src='./magalu2.PNG' align='left' />
            
            <span className='header-title'>
                ThanosLu Friday
            </span>
            <br/>
            <span className="header-text">
                Bazar ThanosLu - Os melhores games da Galáxia para você
            </span>
           
            <br/>
            <input type="text" placeholder="O que você está procurando?" className="input-field2"/>
            
            
            
        </div>
    );
}

const Card = (props) =>{
    return(
        <div className={props.className} >
            <div className="small-div">
                <i className={props.className}></i>
                <img src={props.img} alt=''/>
            </div>

            <div className="big-div">
                <span className='div-title'>
                    {props.title}
                </span>
                <br/>
                <span>
                    {props.description}
                </span>
                <br/>
                <br/>
                
                <h2>{props.price}</h2>
                
            </div>
        </div>
    )
}


const ContactContainer = () => {
    const [email, setEmail] = useState('')
    const [comentarios,setComentarios] = useState('')

    return(
        <div className='contact-container bg-grey'>
            
            <div className='contact-form'>
                
                <div id='sect1'>
                    
                    <span>Visite a nossa loja física ou entre em contato:</span>
                    <span>
                        <i className="fas fa-map-marker-alt"></i>
                        Endereço: Rua do Rio 666, Rio de Janeiro/Brasil
                    </span>
                    <span>
                        <i className="fas fa-mobile-alt"></i>
                        Tel: +55 (21) 555 555 555
                    </span>
                    <span>
                        <i className="far fa-envelope"></i>
                        Email: thanoslu@gmail.com
                    </span>
                </div>
                    
                <div id='sect2'>
                    <span>
                        Cadastre seu email para receber nossas ofertas da ThanosLu Friday
                    </span>
                    
                    <input type="text" placeholder="endereço de email" className="input-field" value={email} onChange={e=> setEmail(e.target.value)} />
                    <button className="cadastro-btn" onClick={handleCadastro} >Cadastrar</button>
                    <br/>
                    <span>
                        Envie seus comentários para gente 
                    </span>
                    
                    <textarea name="comentarios" id="" cols="30" rows="10" placeholder="comentários" value={comentarios} onChange={e=> setComentarios(e.target.value)}></textarea>
                    <button className="contact-btn" onClick={handleComentarios}>Enviar Comentários</button>
                </div>
            </div>
        </div>

        
    );
    
    
    function handleCadastro() {
      localStorage.setItem(email,JSON.stringify(email));
    };

    function handleComentarios() {
        localStorage.setItem(comentarios,JSON.stringify(comentarios));
      };
}

//JSX -> HTML dentro do JS. Codigo html dentro da função do React