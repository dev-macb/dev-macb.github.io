// Importação de módulos
import './Contato.css';
import { Secao, Titulo, Principal } from '../../shared/components';
import { ItemContato } from '../../shared/components/item-contato/ItemContato';


const Contato = () => {
    return (
        <Principal btnVoltar={true}>
            <Titulo>
                <h1 className='titulo'>Contato</h1>
                <h2 className='subtitulo'>Vamos trabalhar juntos</h2>
            </Titulo>
            <Secao>
                <div className='secao-esquerda-contato'>
                    <p className='texto-contato'>
                        Embora eu não esteja procurando novas oportunidades no 
                        momento, minha caixa de entrada está sempre aberta. Se 
                        você tem uma pergunta ou apenas quer dizer oi, farei o 
                        possível para entrar em contato com você!
                    </p>

                    <div className="contatos">
                        <ItemContato link='mailto:dev.macb@gmail.com'>
                            <h4 className='titulo-contato'>E-mail</h4>
                            <p className='texto-contato'>dev.macb@gmail.com</p>
                        </ItemContato>

                        <ItemContato link='https://api.whatsapp.com/send/?phone=5562991416616'>
                            <h4 className='titulo-contato'>Telefone</h4>
                            <p className='texto-contato'>+55 (62) 991-416-616</p>
                        </ItemContato>  

                        <ItemContato link='https://www.google.com/maps/place/Goi%C3%A2nia,+GO/@-16.6958759,-49.3042674,11z/data=!3m1!4b1!4m6!3m5!1s0x935ef6bd58d80867:0xef692bad20d2678e!8m2!3d-16.6868912!4d-49.2647943!16s%2Fg%2F11b6_k3v69'>
                            <h4 className='titulo-contato'>Localização</h4>
                            <p className='texto-contato'>Goiânia, Goiás, Brasil</p>
                        </ItemContato>  
                    </div>
                </div>

                <div className='secao-direita-contato'>
                    <div className="redes-sociais">
                        <a className='butao-redes-sociais' href="https://github.com/dev-macb" target='_blank' rel='noopener noreferrer'>Github</a>
                        <a className='butao-redes-sociais' href="https://www.linkedin.com/in/dev-macb/" target='_blank' rel='noopener noreferrer'>LinkedIn</a>
                    </div>
                </div>

            </Secao>
        </Principal>
    );
}


export { Contato };
