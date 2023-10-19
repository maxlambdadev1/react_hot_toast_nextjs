'use client';
import { useState, useEffect } from 'react';
import { Depi, notify } from '@/components/Depi'

export const DepiContainer = () => {

    const [position, setPosition] = useState<String>('bottom-right');

    const btnClick = (pos : string) => {
        setPosition(pos);
        notify(pos);
    }

    return (
        <div >
            <div onClick={() => btnClick('bottom-left')}>bottom left</div>
            <div onClick={() => btnClick('bottom-center')}>bottom center</div>
            <div onClick={() => btnClick('bottom-right')}>bottom right</div>
            <div onClick={() => btnClick('top-left')}>top left</div>
            <div onClick={() => btnClick('top-center')}>top center</div>
            <div onClick={() => btnClick('top-right')}>top right</div>
            <Depi position={position} />
        </div>
    )
}
