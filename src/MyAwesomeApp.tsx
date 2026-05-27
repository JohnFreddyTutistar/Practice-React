import type { CSSProperties } from "react";

const firstname = 'John'
const lastname = 'Tutistar'

const favoriteGames = ['Fortnite', 'Crash car', 'Metal Gear'];
const isActive = false;

const address = {
    zipCode: 'ABC-123',
    country: 'Canada'
}

const myStyles: CSSProperties = {
    backgroundColor: '#fafafa',
    borderRadius: 'red',
    padding: 10,
    marginTop: 3
}

export function MyAwesomeApp(){
    return (
        <>
            <h1>{ firstname }</h1>
            <h3>{ lastname }</h3>
            <p> { favoriteGames.join('') } </p>
            <h1>{isActive ? 'Activo' : 'No activo'}</h1>

            <p style={myStyles}>{JSON.stringify(address)}</p>
        </>
    )
}