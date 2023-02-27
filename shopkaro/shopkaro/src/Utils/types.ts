export interface Product{
    "id": number,
   "name":string,
   "category": string,
   "size": string,
   "price": number,
   "image": string,
   "description": string,
   "brand": string,
   "color": string,
   "rating":string;
   "quantity":number;
   "discount": number,
    "newproduct"?:string,
    "trending"?:boolean


}

export interface sort{

val:string | undefined,
status:boolean | undefined


}

export interface inputdet{
    id:number,
    email:string | undefined,
    password:string | number | undefined,
    usename:string | undefined
}