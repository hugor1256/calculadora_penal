import { Discount } from './Discount';

import { applyDiscount } from '../../helper/applyDiscount';

export class DiscountIsFirstOffenderAndConfessedAndColabored extends Discount {
    calculateDiscount(
        value: number,
        isFisrtOffender?: boolean,
        advogado?: boolean,
        confessed?: boolean,
        colabored?: boolean
    ): number | undefined {
        if (isFisrtOffender && confessed && colabored) {
            return applyDiscount(30, value);
        }

        return this.nextDiscount?.calculateDiscount(value, isFisrtOffender, advogado, confessed, colabored);
    }

}