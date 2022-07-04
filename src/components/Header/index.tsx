import { useState } from 'react'
import Modal from 'react-modal'
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './stylex'


interface HeaderProps{
    onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: HeaderProps){
    return(
        <Container>
            <Content>           
                <img src={logoImg} alt="VmMoney" />
                    <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova transação
                </button>


            </Content> 
        </Container>
    ) 
}

function True(True: any) {
    throw new Error('Function not implemented.');
}
