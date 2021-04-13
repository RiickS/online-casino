import { useState, useEffect, forwardRef, useImperativeHandle } from 'react'


export const RandomNumGeneratir = forwardRef((props, ref) => {
    const [state, setState] = useState({
        min: 1,
        max: 9,
        number: 1
    })

    useImperativeHandle(ref, () => ({
        random: getInputs
    }));

    useEffect(() => {
        const copyState = { ...state }
        copyState.number = generateNumber(state.min, state.max)
        setState(copyState)
    }, [])


    const generateNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }


    const getInputs = () => {
        const copyState = { ...state }
        copyState.number = generateNumber(state.min, state.max)
        setState(copyState)
    }

    return (
        <div id="generator">
            <h1 id="rNum">{state.number}</h1>
        </div>
    );

})
