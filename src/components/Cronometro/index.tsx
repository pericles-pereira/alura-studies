import Botao from "../Botao";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss';
import { ITarefa } from "../../types/ITarefa";
import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../../common/utils/time";

interface Props {
    selecionado: ITarefa | undefined
    finalizarTarefa: () => void
}

export default function Cronometro({ selecionado, finalizarTarefa }: Props) {
    const [tempo, setTempo] = useState<number>();
    useEffect(() => {
        if(selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado?.tempo));
        }
    }, [selecionado]);

    function regressiva(contador: number = 0) {
        // faz o código esperar esse tempo para executar essa função passada por parâmetro
        // e como retorna essa mesma função só que com 1s a menos, ele espera mais um segundo e executa
        // e isso é um loop, acaba chegando em 0
        setTimeout(() => {
            if(contador > 0) {
                setTempo(contador - 1);
                return regressiva(contador - 1);
            }
            finalizarTarefa();
        }, 1000);
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>
            <Botao onClick={() => regressiva(tempo)}>
                Começar
            </Botao>
        </div>
    )
}
