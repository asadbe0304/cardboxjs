const car = [{
        title: "SPARK",
        price: 1400,
        color: "Black",
        position: "4",
        race: 40000,
        price: 8000,
        img: "https://freepngimg.com/thumb/car/2-2-car-transparent-thumb.png",
    },
    {
        title: "Toyota",
        price: 15000,
        color: "White",
        position: "4",
        race: 10000,
        price: 18000,
        img: "https://freepngimg.com/thumb/car/1-2-car-png-picture-thumb.png",
    },
    {
        title: "Hyundai",
        price: 1400,
        color: "Blue",
        position: "4",
        race: 48500,
        price: 15000,
        img: "https://freepngimg.com/thumb/car/4-2-car-png-hd-thumb.png",
    },
];

const elProducts = document.querySelector(".products")
for (let i = 0; i < car.length; i++) {
    const product = car[i];
    // console.log(product);
    const elProduct = document.createElement("li");
    elProduct.classList.add("list")
    const elProductImg = document.createElement("img");
    elProductImg.src = product.img;
    elProductImg.width = 250;
    elProductImg.classList.add("pro__img")
    const elProductTitle = document.createElement("h3");
    elProductTitle.textContent = product.title;
    //color rangi
    const elProductSize = document.createElement("p");
    elProductSize.textContent = product.color;
    // position
    const elProductsPos = document.createElement("p");
    elProductsPos.textContent = product.position;

    // probegi
    const elProductsRace = document.createElement("p");
    elProductsRace.textContent = ` ${product.race} km`;

    //narxi
    const elProductsPrice = document.createElement("p");
    elProductsPrice.textContent = `$ ${product.price}`;

    elProduct.append(elProductImg, elProductTitle, elProductSize, elProductsPos, elProductsRace, elProductsPrice);

    elProducts.append(elProduct)

}