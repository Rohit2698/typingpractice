import { initialValue } from "./initialValue";
import { IActionPayload } from "../base/Base";
import { cloneDeep } from "lodash";
import { ACCURACY, CORRECT_TYPED, PARAGRAPH_SELECTED, TIME_SELECTED, TIME_TAKEN, TOTAL_STROKES, WRONGS_TYPED } from "./action";

export const reducer = (state = initialValue, action: IActionPayload<any>): any => {
    const stateClone = cloneDeep(state);
    switch (action.type) {
        case TOTAL_STROKES:
            stateClone.totalStrokes = action.payload;
            break;
        case ACCURACY:
            stateClone.accuracy = action.payload;
            break;
        case TIME_TAKEN:
            stateClone.timeTaken = action.payload;
            break;
        case PARAGRAPH_SELECTED:
            stateClone.paragraphSelected = action.payload;
            break;
        case WRONGS_TYPED:
            stateClone.wrongsTypes = action.payload;
            break;
        case CORRECT_TYPED:
            stateClone.wrongsTypes = action.payload;
            break;
        case TIME_SELECTED:
            stateClone.timeSelected = action.payload;
            break;
        default:
            return stateClone;
    }
}