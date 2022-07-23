import styled from 'styled-components';

export const Container = styled.section`
    width:100%;
    min-height:100vh;
    height:auto;
    padding:15px;
    background-color:#C3E288;

    @media ( min-width:320px ) {
        padding:50px;
    }
    @media ( min-width:768px ) {
        height:100vh;
    }
    @media ( min-width:1024px ) {
        padding:80px;
    }
`;