import React, { useState } from "react";

export function useForms(steps: React.ReactElement[]){
    const [curStep, setCurStep] = useState(0)

    function changeStep(i: number, e?: React.FormEvent<HTMLFormElement>){
        if(e) e.preventDefault();
        if(i<0 || i>=steps.length) return
        setCurStep(i);
    }

    return{
        curStep,
        curComponent: steps[curStep],
        changeStep,
        isLastStep: curStep+1 === steps.length ? true : false,
        isFirstStep: curStep === 0 ? true : false,
    }
}