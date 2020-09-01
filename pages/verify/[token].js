import React, {useEffect, useState } from 'react';
import DefaultLayout from 'components/layout/DefaultLayout';
import { Progress, ErrorBoundary } from 'components/blocks'
import { useRouter } from 'next/router'
import APIClient from 'utils/APIClient';
import { PENDING, RESOLVED, REJECTED } from '@constants';
import Router from 'next/router';
import { toast } from 'react-toastify'
import { toastConfig } from 'utils';



export default function Verify() {
    const { query } = useRouter();
    const [ fetchState, setFetchState] = useState(PENDING)
    const [message, setMessage] = useState('');

    const notifySuccess = (message = '🥳 Yay!!!!') => toast.success(message, toastConfig)
    
    useEffect(() => {
        if(query.token){
            APIClient.get('users/validate/' + query.token)
            .then(response => {
                setFetchState(RESOLVED)
                notifySuccess('Go head, login.')
                const timeout = setTimeout(() => {
                    Router.push('/')
                    clearTimeout(timeout)
                }, 1500);

            })
            .catch(error => {
                // console.log(error.response)
                setMessage(error.response.data.payload.message)
                setFetchState(REJECTED)
            })
        }
    }, [query.token])
    return (
        <DefaultLayout>
            <main className="w-screen pt-5 pb-16 px-4 xl:px-0">
                { fetchState === PENDING && <Progress />}
                { fetchState === REJECTED && <ErrorBoundary message={message} />}
            </main>
        </DefaultLayout>
    )
}