import { Discount } from './Discount';

import { applyDiscount } from '../../helper/applyDiscount';

export class DiscountConfessedAndColaboredAndAdvogado extends Discount {
    calculateDiscount(
        value: number,
        isFisrtOffender?: boolean,
        advogado?: boolean,
        delacao?: boolean,
        confessed?: boolean,
        colabored?: boolean
    ): number | undefined {
        if (confessed && colabored && advogado) {
            return applyDiscount(50, value);
        }

        return this.nextDiscount?.calculateDiscount(value, isFisrtOffender, advogado, delacao, confessed, colabored);
    }

}