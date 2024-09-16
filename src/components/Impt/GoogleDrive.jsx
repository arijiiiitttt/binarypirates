import React from 'react'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const GoogleDrive = () => {
    const router = useRouter();
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.location.href = '/'
        }
    }, []);
    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <h2 className="text-2xl font-bold">Redirecting to Google Drive...</h2>
            </div>
        </>
    )
}

export default GoogleDrive