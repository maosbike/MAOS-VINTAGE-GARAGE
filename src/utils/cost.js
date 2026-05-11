export const FREIGHT_USD = { USA: 1800, DE: 3000 };
export const INSURANCE_RATE = 0.02;
export const TARIFF_RATE_NO_FTA = 0.06;
export const IVA_RATE = 0.19;
export const MAOSCARS_COMMISSION = 0.1;

export const LOCAL_COSTS_CLP = {
  customsAgent: 450000,
  port: 300000,
  transportToSantiago: 250000,
  caachInspection: 200000,
};

export function calcImportCost({
  purchaseUSD = 0,
  origin = 'USA',
  fxClpUsd = 915,
  ftaApplies = true,
}) {
  const freightUSD = FREIGHT_USD[origin] ?? FREIGHT_USD.USA;
  const insuranceUSD = purchaseUSD * INSURANCE_RATE;
  const cifUSD = purchaseUSD + freightUSD + insuranceUSD;

  const tariffRate = ftaApplies ? 0 : TARIFF_RATE_NO_FTA;
  const tariffUSD = cifUSD * tariffRate;
  const ivaUSD = (cifUSD + tariffUSD) * IVA_RATE;

  const localCostsCLP = Object.values(LOCAL_COSTS_CLP).reduce(
    (acc, v) => acc + v,
    0
  );

  const subtotalUSD = cifUSD + tariffUSD + ivaUSD;
  const subtotalCLP = subtotalUSD * fxClpUsd + localCostsCLP;

  const commissionCLP = subtotalCLP * MAOSCARS_COMMISSION;
  const totalCLP = subtotalCLP + commissionCLP;

  return {
    purchaseUSD,
    freightUSD,
    insuranceUSD,
    cifUSD,
    tariffRate,
    tariffUSD,
    ivaUSD,
    localCostsCLP,
    breakdown: LOCAL_COSTS_CLP,
    subtotalUSD,
    subtotalCLP,
    commissionCLP,
    totalCLP,
    fxClpUsd,
    origin,
    ftaApplies,
  };
}
