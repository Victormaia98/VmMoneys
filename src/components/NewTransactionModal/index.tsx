import Modal from 'react-modal'

interface NewTransacitonModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransacitonModalProps){
    return(
        <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        >
        
            <h2>Cadastrar Transação</h2>
        
        </Modal>
    )
}