import { calculatePrice } from '@/lib/pricing';

interface SkillCardProps {
  id: string;
  name: string;
  icon: string;
  basePrice: number;
  soldCount: number;
}

export function SkillCard({ id, name, icon, basePrice, soldCount }: SkillCardProps) {
  const currentPrice = calculatePrice(basePrice, soldCount);
  
  return (
    <a href={`/skill/${id}`} className="card">
      <div className="icon">{icon}</div>
      <h3>{name}</h3>
      <div className="price">¥{currentPrice}</div>
      <div className="sold">{soldCount} 已售</div>
    </a>
  );
}
