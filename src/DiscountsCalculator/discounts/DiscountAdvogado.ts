import { Discount } from './Discount';

import { applyDiscount } from '../../helper/applyDiscount';

export class DiscountAdvogado extends Discount {
  calculateDiscount(
    value: number,
    isFisrtOffender?: boolean,
    advogado?: boolean,
    delacao?: boolean,
    confessed?: boolean,
    colabored?: boolean
  ): number | undefined {
    if (advogado) {
      return applyDiscount(30, value);
    }

    // if (advogado && isFisrtOffender) {
    //   return applyDiscount(40, value);
    // }

    // if (advogado && confessed) {
    //   return applyDiscount(40, value);
    // }

    // if (advogado && colabored) {
    //   return applyDiscount(40, value);
    // }

    // if (advogado && isFisrtOffender && confessed) {
    //   return applyDiscount(50, value);
    // }

    // if (advogado && isFisrtOffender && colabored) {
    //   return applyDiscount(50, value);
    // }

    // if (confessed && isFisrtOffender && colabored) {
    //   return applyDiscount(30, value);
    // }


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