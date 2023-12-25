import React from 'react'
import style from './Botao.module.scss';

interface Props {
    onClick?: () => void
    type?: "button" | "submit" | "reset" | undefined
    children?: React.ReactNode
}

export default function Botao({ onClick, type ="button", children  }: Props) {
    return (
        <button type={type} className={style.botao} onClick={onClick}>
            {children}
        </button>
    )
}

