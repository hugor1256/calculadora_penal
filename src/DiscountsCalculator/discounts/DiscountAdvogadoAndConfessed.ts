import { Discount } from './Discount';

import { applyDiscount } from '../../helper/applyDiscount';

export class DiscountAdvogadoAndConfessed extends Discount {
    calculateDiscount(
        value: number,
        isFisrtOffender?: boolean,
        advogado?: boolean,
        delacao?: boolean,
        confessed?: boolean,
        colabored?: boolean
    ): number | undefined {
        if (advogado && confessed) {
            return applyDiscount(40, value);
        }

        return this.nextDiscount?.calculateDiscount(value, isFisrtOffender, advogado, delacao, confessed, colabored);
    }

}