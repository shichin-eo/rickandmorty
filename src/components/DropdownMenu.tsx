import React from 'react';
import Flex from './Flex';
import styled from 'styled-components'
import Button from './Button';

interface DropdownMenuI {
    filtersHandler: (filter: string, action: string) => void;
}

const StyledDropdownMeny = styled.div<DropdownMenuI>`
    position: absolute;
    width: 30%;
    height: auto;
    top: 100%;
    right: 0;
    z-index: 5;
    background: ${props =>  props.theme.body};
    border: 1px solid ${props => props.theme.borderColor};
    border-radius: 5px;
    padding: 2%;
`

const DropdownMenu: React.FC<DropdownMenuI> = (props) => {
    const {filtersHandler} = props;
    return (
        <StyledDropdownMeny {...props}>
            <Flex direction="column" >
                <Button  height="5vh" hover={true} onClick={()=>{filtersHandler("Alive", "add")}}>Alive</Button>
                <Button  height="5vh" hover={true} onClick={()=>{filtersHandler("Dead", "add")}}>Dead</Button>
            </Flex>
        </StyledDropdownMeny>
    );
};

export default DropdownMenu;