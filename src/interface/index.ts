
export interface IProperty  {
  _id:string;  
  title: string;
  description: string;
  price: number;
  type:string;
  location: string;
  images: string[];
  realtorId: string; 
  createdAt: Date;
  updatedAt: Date;
}
