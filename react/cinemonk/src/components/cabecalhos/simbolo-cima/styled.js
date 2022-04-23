import styled from "styled-components";

const Container = styled.div `

    .cabecalho {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .ticket img {
    height: 80px;
    width: 80px;
    margin-top: 20px;
    margin-bottom: 5px;
}

    .titulo {
        margin-bottom: 60px;
        color: #F0A124;
        font-family: Seoul;
        font-weight: 400;
        font-size: 64px;
        text-shadow: 2px 2px 2px rgba(255, 255, 255, 0.5);
    }

`

export { Container };
