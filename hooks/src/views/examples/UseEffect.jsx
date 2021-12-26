import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const calcFatorial = function (n) {
    if (n < 0) return -1
    if (n === 0) return 1
    return calcFatorial(n - 1) * n
}

const calcStatus = function (n) {
    if (n % 2 === 0) {
        return "Par"
    }
    return "Impar"
}

const UseEffect = (props) => {

    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    const [status, setStatus] = useState("Impar")

    useEffect(() => {
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(() => {
        setStatus(calcStatus(number))
    }, [number])

    useEffect(() => {
        if (fatorial > 100000) document.title = "Eita!!!"
    }, [fatorial])


    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="01"></SectionTitle>
            <div className="center">
                <div>
                    <span className="text">Fatorial</span>
                    <span className="text red"> {fatorial === -1 ? "Não Existe" : fatorial}</span>
                </div>
            </div>
            <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)} />
            <SectionTitle title="02"></SectionTitle>
            <div className="center">
                <div>
                    <span className="text">Status</span>
                    <span className="text red"> {status}</span>
                </div>
            </div>
        </div>
    )
}

export default UseEffect
