import { calculatePrice } from '@/lib/pricing';

interface PriceCurveProps {
  basePrice: number;
  soldCount: number;
}

export function PriceCurve({ basePrice, soldCount }: PriceCurveProps) {
  // 生成价格数据点
  const data = Array.from({ length: 100 }, (_, i) => ({
    sold: i,
    price: calculatePrice(basePrice, i),
  }));

  return (
    <div className="price-curve">
      <div className="current">
        当前价格: ¥{calculatePrice(basePrice, soldCount)}
      </div>
      <div className="chart">
        {/* 简化版曲线 */}
        <svg viewBox="0 0 200 100">
          <path
            d={data.map((d, i) => 
              `${i === 0 ? 'M' : 'L'} ${d.sold * 2} ${100 - d.price / 3}`
            ).join(' ')}
            fill="none"
            stroke="#6366f1"
            strokeWidth="2"
          />
          <circle 
            cx={soldCount * 2} 
            cy={100 - calculatePrice(basePrice, soldCount) / 3}
            r="4"
            fill="#6366f1"
          />
        </svg>
      </div>
    </div>
  );
}
