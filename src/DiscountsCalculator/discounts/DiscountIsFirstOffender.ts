import { Discount } from './Discount';

import { applyDiscount } from '../../helper/applyDiscount';

export class DiscountIsFirstOffender extends Discount {
    calculateDiscount(
        value: number,
        isFisrtOffender?: boolean,
        advogado?: boolean,
        confessed?: boolean,
        colabored?: boolean
    ): number | undefined {
        if (isFisrtOffender) {
            return applyDiscount(10, value);
        }

        return this.nextDiscount?.calculateDiscount(
            value,
            isFisrtOffender,
            advogado,
            confessed,
            colabored
        );
    }

}