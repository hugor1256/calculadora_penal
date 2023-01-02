import { Discount } from './Discount';

import { applyDiscount } from '../../helper/applyDiscount';

export class DiscountIsFirstOffenderAndConfessedAndDelacao extends Discount {
    calculateDiscount(
        value: number,
        isFisrtOffender?: boolean,
        advogado?: boolean,
        confessed?: boolean,
        delacao?: boolean,
        colabored?: boolean
    ): number | undefined {
        if (isFisrtOffender && confessed && delacao) {
            return applyDiscount(70, value);
        }

        return this.nextDiscount?.calculateDiscount(value, isFisrtOffender, advogado, delacao, confessed, colabored);
    }

}