let content = document.getElementById("content");

let contentitemdata = [{
    id:"1",
    name:"Ruler",
    price:1,
    desc:"مسطرة زجاجية بطول 15سم",
    img:"projectP/rrrr.jpg"
},
{
    id:"2",
    name:"Sharpener",
    price:2,
    desc:"مبراة بلاستيكية بجودة عالية",
    img:""
},
{
    id:"3",
    name:"Pen",
    price:0.80,
    desc:"قلم حبر بلون ازرق",
    img:""
},
{
    id:"4",
    name:"Paper",
    price:0.25,
    desc:"ورق ابيض للطباعة",
    img:""
}]

let generatecontent =()=>{

    return (content.innerHTML = contentitemdata.map((x)=>{
        let { id, name, price, desc,  img } = x;
        return `
        <div id=product-id-${id} class="product">
        <img src=${img} alt="اسم المنتج">
        <div class="product-info">
          <h2>${name}</h2>
          <p>${desc}</p>
          <p>$${price}.00</p>
          <button oncclick="incrememnt(${id})">أضف إلى السلة</button>
        </div>
      </div>
        `
    }).join(""));
};
generatecontent()

let incrememnt = (id)=>{
    let selectedItem = id;
    console.log(selectedItem.id);
};
let update = () => {};

const ADODB = require('node-adodb');

const dbPath = 'C:\Users\Basher\AppData\Local\Discord';

const connection = ADODB.open(`Provider=Microsoft.ACE.OLEDB.12.0;Data Source=${dbPath};
  Persist Security Info=False;`);
