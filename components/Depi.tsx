'use client';
import { useState, useEffect } from 'react';
import styles from '@/components/Depi.module.css';
import toast, { Toaster } from 'react-hot-toast';
import { CustomToast } from './CustomToast';


export const Depi = () => {

    const notify = () => {
        console.log('toast')
        toast.custom((t) => (
            <CustomToast toast={toast} t={t} />
        ), {
            duration : 100000
        });
    }

    return (
        <div>
            <button onClick={() => notify()}>toast</button>
            <Toaster
                position="bottom-right"
                reverseOrder={false} 
            />
        </div>
    )
}
