import type { CSSProperties } from "react";

const name = 'John'
const lastname = 'Tutistar'

const numberArray = [1,2,3,4];

const myStyles: CSSProperties = {
    color: 'red',
    padding: 12,
    marginTop: 3
}

export function MyAwesomeApp(){
    return (
        <>
            <h1>{ name }</h1>
            <h3>{ lastname }</h3>
            <p> { numberArray.map( element => element * 2 ) } </p>
            <p style={ myStyles }>{ numberArray.join(', ') }</p>
        </>
    )
}