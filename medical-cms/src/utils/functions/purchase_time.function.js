import moment from 'moment';
import {
    monthTH2Number
} from './moment.function';

export const getPurchaseTime =  (year,month) => {
    console.info(`${year}-${monthTH2Number(month)}`)

    const  purchase_time = moment(`${year}-${monthTH2Number(month)}`,'YYYY-MM')
                            .subtract(543,'y');
            return purchase_time
        }