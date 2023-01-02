export abstract class Discount {
    nextDiscount?: Discount;

    constructor(nextDiscount?: Discount) {
        this.nextDiscount = nextDiscount;
    }

    abstract calculateDiscount(
        value: number,
        isFisrtOffender?: boolean,
        advogado?: boolean,
        confessed?: boolean,
        colabored?: boolean
    ): number | undefined
}