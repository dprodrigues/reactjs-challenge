import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
`;

export const Row = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 0 24px;
    width: 100%;
`;

export const LeftColumn = styled.div`
    background-color: #3b4252;
    height: 100%;
    padding: 24px;
    width: 30%;
`;

export const RightColumn = styled.div`
    height: 100vh;
    overflow-y: scroll;
    padding: 24px 64px 0;
    width: 70%;
`;

export const Image = styled.img`
    height: auto;
    margin-bottom: 24px;
    width: 100%;
`;

export const FullName = styled.h1`
    color: #eceff4;
    font-size: 40px;
    font-style: italic;
    font-weight: 400;
    line-height: 50px;
    margin: 0;
`;

export const UserName = styled.h2`
    color: #eceff4;
    font-size: 28px;
    font-style: italic;
    font-weight: 400;
    line-height: 34px;
    margin: 0 0 16px;
`;

export const Description = styled.p`
    color: #8190a5;
    font-size: 18px;
    line-height: 28px;
    margin: 0 0 16px;
`;

export const Status = styled.h4`
    color: #eceff4;
    font-size: 20px;
    font-style: italic;
    font-weight: 400;
    line-height: 26px;
    margin: 0;
`;

export const Information = styled.h3`
    color: #eceff4;
    font-size: 28px;
    font-style: italic;
    line-height: 34px;
`;

export const BackButton = styled.button`
    background-color: #eceff4;
    border-radius: 5px;
    color: #3b4252;
    cursor: pointer;
    font-size: 18px;
    height: 50px;
    outline: none;
    margin: 0 auto;
    width: 192px;
`;