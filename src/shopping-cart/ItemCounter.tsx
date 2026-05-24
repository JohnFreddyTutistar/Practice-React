import { useState } from "react"


interface Props {
    name: string,
    quantity?: number
}

const ItemCounter = ( { name: productName, quantity: itemQuantity = 1 }: Props ) => {

    const [ count, setCount ] = useState(itemQuantity)

    const handleAdd = () => {
      setCount(count + 1);
    }

    const handleSubstract = () => {

        if(count === 1) return
        setCount(count - 1);
    }

    return (
        <section 
            style={ {
                display: 'flex', 
                alignItems: 'center', 
                gap: 10,
                marginTop: 10
            }}
        >
            <span style={{width: 150}}> { productName } </span>
            <button onClick={ handleAdd }>+1</button>
            <span>{ count }</span>
            <button onClick={ handleSubstract } >-1</button>
        </section>
    )
}

export default (
    ItemCounter
)

