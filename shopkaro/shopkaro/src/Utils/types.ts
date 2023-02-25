export interface Product{
    "id": number,
   "name":string,
   "category": string,
   "size": string,
   "price": string,
   "image": string,
   "description": string,
   "brand": string,
   "color": string,
   "rating":string;
   "quantity":number;
   "discount"?: number,
    "newproduct"?:string,
    "trending"?:boolean


}

export interface sort{

val:string | undefined,
status:boolean | undefined


}