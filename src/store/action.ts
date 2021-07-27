import { IActionPayload } from "../base/Base";

export const TOTAL_STROKES = "TOTAL_STROKES";
export const ACCURACY = "ACCURACY";
export const TIME_TAKEN = "TIME_TAKEN";
export const PARAGRAPH_SELECTED = "PARAGRAPH_SELECTED";
export const WRONGS_TYPED = "WRONGS_TYPED";
export const CORRECT_TYPED = "CORRECT_TYPED";
export const TIME_SELECTED = "TIME_SELECTED";

export const setTotalStrokes = (strokes: number): IActionPayload<number> => {
    return {
        type: TOTAL_STROKES,
        payload: strokes
    }
}


export const setAccuracy = (accuracy: number): IActionPayload<number> => {
    return {
        type: ACCURACY,
        payload: accuracy
    }
}


export const setTimeTaken = (time: string): IActionPayload<string> => {
    return {
        type: TIME_TAKEN,
        payload: time
    }
}


export const setParagraphSelected = (paragraph: string): IActionPayload<string> => {
    return {
        type: PARAGRAPH_SELECTED,
        payload: paragraph
    }
}


export const setWrongTyped = (wrongTyped: number): IActionPayload<number> => {
    return {
        type: WRONGS_TYPED,
        payload: wrongTyped
    }
}

export const setCorrectTyped = (correctTyped: number): IActionPayload<number> => {
    return {
        type: CORRECT_TYPED,
        payload: correctTyped
    }
}


export const setTimeSelected = (timeSelected: string): IActionPayload<string> => {
    return {
        type: TIME_SELECTED,
        payload: timeSelected
    }
}