export interface IPricing {
    id: string,
    variation: {
        prices: {
            initial: number,
            current: number,
            percentage: number,
            history: number[],
            isPriceCrossed: boolean
        }
    }
}