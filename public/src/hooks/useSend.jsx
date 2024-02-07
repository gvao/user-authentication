import React, { useState } from 'react'

export const useSend =  () => {
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    
    const sendRequest = async(data, url) => {
        try {
            setLoading(true)
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }) 

            if(!response.ok) {
                const errorMessage = await response.text()
                throw new Error(`Erro ao cadastrar usuário: ${errorMessage}`);
            }
    
        } catch (error) {
            setLoading(false)
            setError(error.message);
        }
    }
 

    return { error, sendRequest, loading}
}
