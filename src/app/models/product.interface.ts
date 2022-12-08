import { ICategory } from "./category.interface"

export interface IProduct {
    id:number
    title:string
    price:number,
    description:string,
    images:string[]
    category:ICategory
}