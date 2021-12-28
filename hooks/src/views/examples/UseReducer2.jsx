import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import { initialState, reducer } from '../../store'

import { numberAdd2, login } from '../../store/action'

const UseReducer2 = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [n, setN] = useState(0)
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className='center'>
                {state.user ?
                    <span className="text">{state.user.name}</span> :
                    <span className="text">Sem usuário</span>
                }

                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={() => login(dispatch, 'Maria')}>Login</button>
                    <button className="btn" onClick={() => numberAdd2(dispatch)}>+2</button>
                    <button className="btn" onClick={() => dispatch({ type: 'number_mutiply7' })}>*7</button>
                    <button className="btn" onClick={() => dispatch({ type: 'number_divide25' })}>/25</button>
                    <button className="btn" onClick={() => dispatch({ type: 'number_parseInt' })}>parseInt</button>
                    <input type="number" className="input" value={n} onChange={(e) => setN(e.target.value)} />
                    <button className="btn" onClick={() => dispatch({ type: 'number_addN', payload: n })}>+N</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer2
