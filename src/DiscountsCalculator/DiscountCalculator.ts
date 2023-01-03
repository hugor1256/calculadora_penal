import { DiscountDelacao } from './discounts/DiscountDelacao';
import { DiscountAdvogado } from './discounts/DiscountAdvogado';
import { DiscountIsFirstOffenderAndConfessed } from './discounts/DiscountIsFirstOffenderAndConfessed';
import { WithoutDiscount } from './discounts/WithoutDiscount';
import { DiscountIsFirstOffender } from './discounts/DiscountIsFirstOffender';
import { DiscountConfessed } from './discounts/DiscountConfessed';
import { DiscountColabored } from './discounts/DiscountColabored';
import { DiscountIsFirstOffenderAndColabored } from './discounts/DiscountIsFirstOffenderAndColabored';
import {
    DiscountIsFirstOffenderAndConfessedAndColabored
} from './discounts/DiscountIsFirstOffenderAndConfessedAndColabored';
import { DiscountIsFirstOffenderAndColaboredAndAdvogado } from './discounts/DiscountIsFirstOffenderAndColaboredAndAdvogado';
import { DiscountIsFirstOffenderAndConfessedAndColaboredAndAdvogado } from './discounts/DiscountIsFirstOffenderAndConfessedAndColaboredAndAdvogado';
import { DiscountConfessedAndColabored } from './discounts/DiscountConfessedAndColabored';
import { DiscountIsFirstOffenderAndAdvogado } from './discounts/DiscountIsFirstOffenderAndAdvogado';
import { DiscountAdvogadoAndConfessed } from './discounts/DiscountAdvogadoAndConfessed';
import { DiscountAdvogadoAndColabored } from './discounts/DiscountAdvogadoAndColabored';
import { DiscountIsFirstOffenderAndConfessedAndAdvogado } from './discounts/DiscountIsFirstOffenderAndConfessedAndAdvogado';
import { DiscountConfessedAndColaboredAndAdvogado } from './discounts/DiscountConfessedAndColaboredAndAdvogado';

export class DiscountCalculator {
    calculateDiscount(
        value: number,
        isFisrtOffender?: boolean,
        advogado?: boolean,
        delacao?: boolean,
        confessed?: boolean,
        colabored?: boolean
    ): number | undefined {
        const discountChain = new DiscountIsFirstOffenderAndConfessedAndColaboredAndAdvogado(
            new DiscountIsFirstOffenderAndConfessedAndColabored(
                new DiscountIsFirstOffenderAndConfessedAndAdvogado(
                    new DiscountIsFirstOffenderAndColaboredAndAdvogado(
                        new DiscountConfessedAndColaboredAndAdvogado(
                            new DiscountAdvogadoAndColabored(
                                new DiscountIsFirstOffenderAndAdvogado(
                                    new DiscountAdvogadoAndConfessed(
                                        new DiscountConfessedAndColabored(
                                            new DiscountIsFirstOffenderAndColabored(
                                                new DiscountIsFirstOffenderAndConfessed(
                                                    new DiscountAdvogado(
                                                        new DiscountColabored(
                                                            new DiscountDelacao(
                                                                new DiscountConfessed(
                                                                    new DiscountIsFirstOffender(
                                                                        new WithoutDiscount()
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            )
        )
        

           
        return discountChain.calculateDiscount(
            value,
            isFisrtOffender,
            advogado,
            delacao,
            confessed,
            colabored
        );
    }
}