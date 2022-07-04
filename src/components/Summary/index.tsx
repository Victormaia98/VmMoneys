import IncomeImg from '../../assets/income.svg';
import OutcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import { Container } from "./styles";

export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={IncomeImg} alt="Entradas" />
                </header>
                <strong> R$1000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saidas</p>
                    <img src={OutcomeImg} alt="Saídas" />
                </header>
                <strong> - R$500,00</strong>
            </div>

            <div className='HighlightBackground'>
                <header>
                    <p>Entradas</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong> R$500,00</strong>
            </div>

        </Container>
    )
}