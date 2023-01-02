import { Discount } from './Discount';

export class WithoutDiscount extends Discount {
    constructor() {
        super(undefined);
    }

    calculateDiscount(
        value: number,
        isFisrtOffender?: boolean,
        advogado?: boolean,
        confessed?: boolean,
        colabored?: boolean
    ): number | undefined {
        return value;
    }
}