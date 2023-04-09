export function calculateDiscount(price: number, discountedPrice: number): number {
    return Math.round(((price - discountedPrice) / price) * 100);
}

