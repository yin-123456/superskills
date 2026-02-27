// Bonding Curve 定价算法
export function calculatePrice(basePrice: number, soldCount: number): number {
  return Math.round(basePrice * Math.pow(1 + soldCount / 10, 1.5));
}

// 计算购买后的新价格
export function getNextPrice(basePrice: number, soldCount: number): number {
  return calculatePrice(basePrice, soldCount + 1);
}
