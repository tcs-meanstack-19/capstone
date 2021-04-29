export class Order {
    constructor(public _id:number, public userID:Number, public items:Array<any>,public amount:Number, public status:String){}
}