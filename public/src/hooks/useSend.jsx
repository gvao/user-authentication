import React, { useState } from 'react'

export const useSend =  () => {
    const [error, setError] = useState('')
    
    const sendRequest = async(data, api) => {
        try {
            const response = await fetch(api, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }) 
    
            if(!response.ok) {
                setError('Erro ao cadastrar usuário')
            }
    
            console.log(data);
    
        } catch (error) {
            console.log(error.message);
        }
    }
 

    return { error, sendRequest}
}
