export class Product {
  // lets modify the object to set an index for each public data member
  // The 'x' is the indexer for the data member which is always a string
  // since the data member may be string, number, boolean, etc. lets set its type
  // for indexer as 'any' (TypeScript 3.0+)
  [x:string]:any;
  constructor(
    public ProductRowId:number,
    public ProductId:string,
    public ProductName:string,
    public CategoryName:string,
    public Manufacturer:string,
    public Description:string,
    public BasePrice:number,
  ){}
}
