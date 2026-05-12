export const ORIGINS = [
  { code: 'USA', label: 'Estados Unidos', flag: '🇺🇸', freightUSD: 1800, fta: true, hint: 'TLC USA–Chile (arancel 0%)' },
  { code: 'EU', label: 'Europa (UE)', flag: '🇪🇺', freightUSD: 3000, fta: true, hint: 'TLC UE–Chile (arancel 0%)' },
  { code: 'UK', label: 'Reino Unido', flag: '🇬🇧', freightUSD: 3200, fta: true, hint: 'TLC Chile–UK (arancel 0%)' },
  { code: 'JP', label: 'Japón', flag: '🇯🇵', freightUSD: 2500, fta: true, hint: 'TLC Chile–Japón (arancel 0%)' },
  { code: 'CA', label: 'Canadá', flag: '🇨🇦', freightUSD: 2200, fta: true, hint: 'TLC Chile–Canadá (arancel 0%)' },
  { code: 'AU', label: 'Australia', flag: '🇦🇺', freightUSD: 2800, fta: true, hint: 'TLC Chile–Australia (arancel 0%)' },
  { code: 'OTHER', label: 'Otro país', flag: '🌍', freightUSD: 3500, fta: false, hint: 'Sin TLC vigente: arancel 6%' },
];

export const ORIGIN_BY_CODE = Object.fromEntries(ORIGINS.map((o) => [o.code, o]));

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
  const originDef = ORIGIN_BY_CODE[origin] || ORIGIN_BY_CODE.USA;
  const freightUSD = originDef.freightUSD;
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
    originLabel: originDef.label,
    originFlag: originDef.flag,
    ftaApplies,
  };
}
