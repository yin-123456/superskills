// 技能数据类型
export interface Skill {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  soldCount: number;
  sellerId: string;
  icon: string;
}

export interface License {
  id: string;
  skillId: string;
  ownerId: string;
  pricePaid: number;
}
