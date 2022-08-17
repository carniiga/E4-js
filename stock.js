
 const pizzas=[
    {
        id:1 ,
        nombre:"muzza",
        ingredientes: ["Mozzarella","provenzal"],
        precio: 550,
        img: `./img/gustos de pizza/image1.jfif`
    },
    {
        id:2 ,
        nombre:"especial",
        ingredientes: ["Mozzarella","jamón","morrón"],
        precio: 800,
        img:`./img/gustos de pizza/image2.jfif`
    },
    {
        id:3 ,
        nombre:"fugazzeta",
        ingredientes : ["Mozzarella","cebolla"],
        precio: 600,
        img:`./img/gustos de pizza/image3.jfif`
    },
    {
        id:4 ,
        nombre:"salchi",
        ingredientes: ["Mozzarella","salchicha"],
        precio: 550,
        img:`./img/gustos de pizza/image4.png`
    },
    {
        id:5 ,
        nombre:"pasto",
        ingredientes : ["Mozzarella","cebolla de verdeo","cebolla"],
        precio: 740,
        img:`./img/gustos de pizza/image5.jfif`
    },
    {
        id:6 ,
        nombre:"napo",
        ingredientes: ["Mozzarella","jamón ","morrón","tomate natural "],
        precio: 900,
        img:`./img/gustos de pizza/image6.jpg`
    },
    {
        id:7 ,
        nombre:"pelada",
        ingredientes: ["salsa","mozzarella"],
        precio: 300,
        img:`./img/gustos de pizza/image7.png`
    }
 ];
 const pizzasHoy=[];
for(pizza of pizzas){
    pizzasHoy.push(pizza.nombre)
}


//  console.log(`bienvenidos a pizzeria "hdp" los gustos del dia de hoy son:${pizzasHoy}`)
//  console.log("-----catalogo-----")
for(pizza of pizzas){
    // console.log(`${pizza.nombre}: $${pizza.precio}`)
}
 
 for (pizza of pizzas){
    if(pizza.id%2==1){
        // console.log(`las pizza con id impar es  id :${pizza.id} -${pizza.nombre}- `)
    }  
 }
  //esto podria poner los gustos en un array solo, pero para q sea friendly lo decidi hacer asi. si no pondria directamente en un array  en esto caso: ["muzza","salchi","pelada"]
 for (pizza of pizzas){
    if(pizza.precio < 600){
        // console.log(`las pizzas que valen menos de 600 pe son ${pizza.nombre}`)
    }
    
}




