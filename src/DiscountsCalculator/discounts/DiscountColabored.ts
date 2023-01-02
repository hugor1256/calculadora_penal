import { Discount } from './Discount';

import { applyDiscount } from '../../helper/applyDiscount';

export class DiscountColabored extends Discount {
    calculateDiscount(
        value: number,
        isFisrtOffender?: boolean,
        advogado?: boolean,
        delacao?: boolean,
        confessed?: boolean,
        colabored?: boolean
    ): number | undefined {
        if (colabored) {
            return applyDiscount(10, value);
        }

        return this.nextDiscount?.calculateDiscount(
            value,
            isFisrtOffender,
            advogado,
            delacao,
            confessed,
            colabored
        );
    }

}