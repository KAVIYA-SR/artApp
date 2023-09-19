
const ProductArray =[
    {
        id:"1",
        title:"hfsdg",
        price:"36",
    },
    {
        id:"2",
        title:"hfsdg",
        price:"3",
    },
    {
        id:"3",
        title:"hfsdg",
        price:"343",
    },
    {
        id:"4",
        title:"hfsdg",
        price:"374",
    },
    {
        id:"5",
        title:"hfsdg",
        price:"6",
    },
]

function getData(id){
    let data= ProductArray.find(product => product.id===id)
    if(data===undefined)
        return undefined;
    return data;
}

export {ProductArray, getData}