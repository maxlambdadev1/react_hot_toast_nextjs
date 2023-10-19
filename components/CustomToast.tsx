'use client';
import { useState, useEffect } from 'react';
import styles from '@/components/CustomToast.module.css';

type Props = {
    toast : any
    t : any
}
export const CustomToast: React.FC<Props> = ({toast, t }) => {

    const [isPosition, setIsPosition] = useState(false);
    const [isDetailed, setIsDetailed] = useState(false);
    const [isSettings, setIsSettings] = useState(false);
    const [selectedSetting, setSelectedSetting] = useState('small');

    const menu_item_click = (value: string) => {
        console.log('click', value)
        setSelectedSetting(value);
        setIsSettings(false);
    }
    return (
        <div className={`${styles.toast_root} ${styles[selectedSetting]}`}>
            <div className={styles.toast_container}>
                Custom and <b>bold</b>
                <button onClick={() => toast.dismiss(t.id)}>
                    Dismiss
                </button>
            </div>
            <div className={styles.detail_btn} onClick={() => {setIsDetailed(!isDetailed); }}>
            </div>
            <div className={styles.settings_btn} onClick={() => {setIsSettings(!isSettings); }}>
                <div className={`${styles.settings_menu} ${isSettings ? '' : styles.hide}`} >
                    <div className={styles.menu_item} onClick={() => menu_item_click('small')}>Small</div>
                    <div className={styles.menu_item} onClick={() => menu_item_click('medium')} >Medium</div>
                    <div className={styles.menu_item} onClick={() => menu_item_click('large')} >Large</div>
                    <div className={styles.menu_item} onClick={() => menu_item_click('fullscreen')} >Fullscreen</div>
                </div>
            </div>
            <div className={`${styles.detail_container} ${isDetailed ? '' : styles['hide']}`} >
                abcdef
            </div>
        </div>
    )
}
