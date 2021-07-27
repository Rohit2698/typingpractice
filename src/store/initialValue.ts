interface IInitialValue {
    totalStrokes: number,
    accuracy: number,
    timeTaken: number,
    paragraphSelected: string,
    wrongsTypes: number,
    correctTyped: number,
    timeSelected: number
}

export const initialValue: IInitialValue = {
    totalStrokes: 0,
    accuracy: 0,
    timeTaken: 0,
    paragraphSelected: "",
    wrongsTypes: 0,
    correctTyped: 0,
    timeSelected: 0
}