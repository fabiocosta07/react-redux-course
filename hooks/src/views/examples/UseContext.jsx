import React, { useContext, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import DataContext from '../../data/DataContext'
import { AppContext } from '../../data/store'



const UseContext = (props) => {
    const context = useContext(DataContext)

    const addNumber = (n) => {
        context.setState({
            ...context.state,
            number: context.state.number + n
        })
    }

    const { number, setNumber, text, setText } = useContext(AppContext)

    useEffect(() => {
        if (number > 1250) {
            setText('Eita!')
        }
    }, [number])

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            <SectionTitle title="01"></SectionTitle>
            <div className="center">
                <span className="text">{context.state.text}</span>
                <span className="text">{context.state.number}</span>
                <div>
                    <button className='btn' onClick={() => addNumber(1)}> +1</button>
                    <button className='btn' onClick={() => addNumber(-1)}> -1</button>
                </div>
            </div>
            <SectionTitle title="02"></SectionTitle>
            <div className="center">
                <span className="text">{text}</span>
                <span className="text">{number}</span>
                <div>
                    <button className='btn' onClick={() => setNumber(number + 1)}>+1</button>
                    <button className='btn' onClick={() => setNumber(number - 1)}>-1</button>
                </div>
            </div>
        </div>
    )
}

export default UseContext
