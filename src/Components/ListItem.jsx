import React from 'react';
import styled, { css } from 'styled-components'


//styled component
const Wrapper = styled.div`
border-radius: 4px;
box-shadow: 0 4px 8px gray;
margin: 1em 20rem;
display:flex;
justify-content:space-between;
padding: 11px 15px;

`
const BtnContainer = styled.div`
display:flex;
gap:1rem
`

const Button = styled.button`
padding: 8px 13px;
border:none;
border-radius: 5px;
outline: none;
cursor: pointer;
${props => props.completed && css`
background-color:blueviolet;
color: white
`}

${props => props.delete && css`
background-color: tomato;
color: white
`}

`

const ListItem = ({ task }) => {
    return (
        <Wrapper>
           
                <h3>{task.text}</h3>
                <BtnContainer>

                <Button completed>change status</Button>
                <Button delete>Delete</Button>

                </BtnContainer>
                
            
        </Wrapper>
    );
}

export default ListItem;
