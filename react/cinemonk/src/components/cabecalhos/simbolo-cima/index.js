import { Container } from './styled';

export default function Cabecalho() {
    return(
        <Container>
            <div class="home">
                <div class="cabecalho">
                    <div class="ticket"> <img src="../images/ticket.png" alt="" /> </div>
                    <div class="titulo"> CineMonk </div>
                </div>
            </div>
        </Container>
    );
}