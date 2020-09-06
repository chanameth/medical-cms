import {
    mapMonthTH
} from '../constants/date.constant';


export const monthTH2Number = (monthTxt) => {
    return mapMonthTH[monthTxt];
}