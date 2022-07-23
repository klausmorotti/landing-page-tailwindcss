import styled from 'styled-components';

export const Content = styled.article`
    max-width:1200px;
    width:100%;
    height:auto;
    display:flex;
    flex-direction:column;

    @media ( min-width:1024px ) {
        flex-direction:row;
        max-width:1200px;
        margin:100px auto 0 auto;
    }

`;
