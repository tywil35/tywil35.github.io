import { Rated } from '../types/rated.type';
import { Me } from '../types/me.type';
import { RatesKey } from '../types/rates-key.type';
export const SortByRates = (rates: Rated[]) => {
    return rates.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : a.name.toLowerCase() === b.name.toLowerCase() ? 0 : 1).sort((a, b) => a.rated < b.rated ? 1 : a.rated === b.rated ? 0 : -1);
}

export const CheckAndSortRates = (ratesKey: RatesKey, me?: Me) => {
    return !me ? [] : SortByRates(me[ratesKey])
};