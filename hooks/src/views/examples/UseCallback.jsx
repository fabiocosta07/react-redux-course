import React, { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButtons from './UseCallbackButtons'

const UseCallback = (props) => {

    const [count, setCount] = useState(0)

    // const inc = (n) => {
    //     setCount(count + n)
    // }

    const inc = useCallback((n) => {
        setCount(current => current + n)
    }, [setCount])

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />
            <div className="center">
                <span className="text">{count}</span>
                <UseCallbackButtons inc={inc} />
            </div>
        </div>
    )
}

export default UseCallback
