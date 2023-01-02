import { Discount } from './Discount';

import { applyDiscount } from '../../helper/applyDiscount';

export class DiscountIsFirstOffenderAndColaboredAndAdvogado extends Discount {
    calculateDiscount(
        value: number,
        isFisrtOffender?: boolean,
        advogado?: boolean,
        confessed?: boolean,
        colabored?: boolean
    ): number | undefined {
        if (isFisrtOffender && colabored && advogado) {
            return applyDiscount(50, value);
        }

        return this.nextDiscount?.calculateDiscount(value, isFisrtOffender, advogado, confessed, colabored);
    }

}