import { calculatePrice, getNextPrice } from '@/lib/pricing';

interface BuyButtonProps {
  skillId: string;
  basePrice: number;
  soldCount: number;
}

export function BuyButton({ skillId, basePrice, soldCount }: BuyButtonProps) {
  const currentPrice = calculatePrice(basePrice, soldCount);
  const nextPrice = getNextPrice(basePrice, soldCount);

  return (
    <div className="buy-section">
      <div className="price-info">
        <span className="current">¥{currentPrice}</span>
        <span className="next">下一份 ¥{nextPrice}</span>
      </div>
      <button className="buy-btn">立即购买</button>
    </div>
  );
}
