import styled from "@emotion/styled";

export const MainBox = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-around;
    width:300px;
    height:80px;
    border:1px solid black;
    margin-top: 30px;
    `;


export const SmallBox = styled.div`
    width:50px;
    height:50px;
    border:1px solid black;
    display: flex;
    justify-content:center;
    align-items:center;

    cursor: pointer;
        :hover{
            transform: scale(1.1);
            color:white;
        };
    `;
