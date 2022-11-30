export const applyDiscount = (percetange: number, value: number): number => {
    const multiplier = percetange / 100;
    return multiplier * value;
}