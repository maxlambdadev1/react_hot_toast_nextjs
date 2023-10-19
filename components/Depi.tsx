'use client';
import { useState, useEffect } from 'react';
import styles from '@/components/Depi.module.css';
import toast, { Toaster } from 'react-hot-toast';
import { CustomToast } from './CustomToast';

type Props = {
    position : any
}
export const Depi:React.FC<Props> = ({position}) => {

    return (
        <div>
            <Toaster
                position={position}
                reverseOrder={false} 
            />
        </div>
    )
}

export const notify = (position : String) => {
    const pos = position.indexOf('top') >= 0 ? 'top' : 'bottom';
    toast.custom((t) => (
        <CustomToast toast={toast} t={t} pos={pos}/>
    ), {
        duration : 100000
    });
}