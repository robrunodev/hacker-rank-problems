import { useEffect, useState } from 'react'

export const useApp = () => {

    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiTUVNQkVSIiwic3ViIjoiMTE0MWIwYTUtNDkxYi00YmRiLWEzZjktY2M2Nzc0M2FhNjY3IiwiaWF0IjoxNzI2NjU5MTg0LCJleHAiOjE3MjY2NTk3ODR9.8HbrEoGelFbn7wBnc5bWIzd9mYN1USq2FLoldUzjmRY'

    const [counter, setCounter] = useState(0)

    const handleAddCounter = () => {

        console.log('Rodrigo')

        setCounter(counter + 1)
    }


    // const authUser = async () =>



    useEffect(() => {
        const payload = JSON.stringify({
            "name": "Rod Bruno", "email": "rodrigosouza397@gmail.com", "password": "!Teste123"
        })
        console.log(payload)
        const asyncFunc = async () => await fetch('http://localhost:3333/users', {
            method: 'POST',
            body: payload
        }).then(data => {
            const teste = data.json()
            console.log({ teste, data })
        }).catch(err => {
            console.log(err)
        })
        asyncFunc().catch(err => { console.log(err) })
    }, [])


    function revertString({ str }) {
        return str.split('').reverse().join('')
    }


    useEffect(() => {
        console.log(revertString({ str: 'Rodrigo' }))
    }, [])

    return {
        counter,
        handleAddCounter,
    }
}