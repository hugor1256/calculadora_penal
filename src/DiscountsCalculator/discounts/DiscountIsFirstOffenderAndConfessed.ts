import { Discount } from './Discount';

import { applyDiscount } from '../../helper/applyDiscount';

export class DiscountIsFirstOffenderAndConfessed extends Discount {
    calculateDiscount(
        value: number,
        isFisrtOffender?: boolean,
        advogado?: boolean,
        confessed?: boolean,
        colabored?: boolean
    ): number | undefined {
        if (isFisrtOffender && confessed) {
            return applyDiscount(20, value);
        }

        return this.nextDiscount?.calculateDiscount(value, isFisrtOffender, advogado, confessed, colabored);
    }

}