import { useState } from 'react'

export const useApp = () => {

    const [counter, setCounter] = useState(0)

    const handleAddCounter = () => {

        console.log('Rodrigo')

        setCounter(counter + 1)
    }


    return {
        counter,
        handleAddCounter,
    }
}