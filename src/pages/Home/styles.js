import styled from "styled-components";

export const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    width: 100%;
`;

export const Title = styled.h1`
    color: #3B4252;
    font-size: 40px;
    font-style: italic;
    line-height: 50px;
    margin: 0;
    text-align: center;
`;

export const Form = styled.form`
    align-items: center;
    display: flex;
`;

export const Input = styled.input`
    background-color: #fff;
    border: 1px solid #3b4252;
    border-radius: 5px;
    color: #3b4252;
    font-size: 18px;
    font-style: italic;
    height: 50px;
    line-height: 62px;
    outline: none;
    padding: 12px 24px;
    width: 400px;
  
    &::placeholder {
        color: #8190A5;
    }
`;

export const SubmitButton = styled.button`
    align-items: center;
    background-color: #47525E;
    border: none;
    border-radius: 5px;
    color: #eceff4;
    cursor: pointer;
    display: flex;
    font-size: 22px;
    font-style: italic;
    height: 50px;
    justify-content: center;
    line-height: 62px;
    margin-left: 8px;
    outline: none;
    text-align: center;
    width: 118px;

`;