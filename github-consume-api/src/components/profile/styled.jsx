import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    height: 200px;
    min-width: 400px;
    width: 500px;
    background-color: aliceblue;
`;

export const WrapperProfileImage = styled.img`
    border-radius: 50%;
    width: 180px;
    margin: 8px;
    border: 3px solid black;
`;

export const WrapperInfoUser = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    width: 100%;
`;

export const WrapperUserData = styled.div`
    display: flex;
    flex-direction: column;
    h1{
        color: blue;
        font-size: 25px;
        font-weight: bold;        
    }

    a{
        font-size: 18px;
        font-style: italic;
    }
`;

export const WrapperStatusCount = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: auto;
    align-items: center;
    div{
        display: flex;
        flex-direction: column;
        margin: 5px;
        align-items: center;
    }
    h4{
        color: blue;
        font-size: 20px;
        font-weight: bold;         
    }
    span{
        text-align: center;
        color: green;
        font-size: 18px;
    }

`;
