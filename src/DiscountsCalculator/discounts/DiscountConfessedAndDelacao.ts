import { Discount } from './Discount';

import { applyDiscount } from '../../helper/applyDiscount';

export class DiscountConfessedAndDelacao extends Discount {
    calculateDiscount(
        value: number,
        isFisrtOffender?: boolean,
        advogado?: boolean,
        delacao?: boolean,
        confessed?: boolean,
        colabored?: boolean
    ): number | undefined {
        if (confessed && delacao) {
            return applyDiscount(60, value);
        }

        return this.nextDiscount?.calculateDiscount(value, isFisrtOffender, advogado, delacao, confessed, colabored);
    }

}