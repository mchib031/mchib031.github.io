

const selectedRestrictions = new Set()

var products = [
	{
		name: "Brocoli",
		picture: "pictures/brocoli.jpg",
		LactoseFree: true,
		NutFree: true,
		isOrganic:true,
		price: 2.00
	},
	{
		name: "Bread",
		picture: "pictures/bread.jpg",
		LactoseFree: false,
		NutFree: false,
		isOrganic:true,
		price: 2.00
	},
	{
		name: "Tomato",
		picture: "pictures/tomato.jpg",
		LactoseFree: true,
		NutFree: true,
		isOrganic:true,
		price: 4.00
	},
	{
		name: "Organic Cheese",
		picture: "pictures/organic_cheese.jpg",
		LactoseFree: false,
		NutFree: true,
		isOrganic:true,
		price: 3.50
	},
	{
		name: "Cheese",
		picture: "pictures/cheese.jpg",
		LactoseFree: false,
		NutFree: true,
		isOrganic:false,
		price: 2.50
	},
	{
		name: "Salmon",
		picture: "pictures/salmon.jpg",
		LactoseFree: true,
		NutFree: true,
		isOrganic:true,
		price: 10.00
	},
	{
		name: "Apple",
		picture: "pictures/apple.jpg",
		LactoseFree: true,
		NutFree: true,
		isOrganic:false,
		price: 1.70
	},
	{
		name: "Milk",
		picture: "pictures/milk.jpg",
		LactoseFree: false,
		NutFree: true,
		isOrganic:true,
		price: 8.50
	},
	{
		name: "Almonds",
		picture: "pictures/almonds.jpg",
		LactoseFree: true,
		NutFree: false,
		isOrganic:true,
		price: 2.00
	},
	{
		name: "Rice",
		picture: "pictures/rice.jpg",
		LactoseFree: true,
		NutFree: true,
		isOrganic:false,
		price: 13.00
	},
	{
		name: "Honey",
		picture: "pictures/honey.jpg",
		LactoseFree: true,
		NutFree: false,
		isOrganic:false,
		price: 4.00
	},
	{
		name: "Avacado",
		picture: "pictures/avocado.jpg",
		LactoseFree: true,
		NutFree: true,
		isOrganic:false,
		price: 4.00
	},
	{
		name: "Strawberry",
		picture: "pictures/strawberry.jpg",
		LactoseFree: true,
		NutFree: true,
		isOrganic:true,
		price: 2.50
	},
	{
		name: "Banana",
		picture: "pictures/banana.jpg",
		LactoseFree: true,
		NutFree: true,
		isOrganic:true,
		price: 1.50
	},
];


function restrictListProducts(prods) {
	let filteredProducts = [];
	for (let i = 0; i < prods.length; i += 1) {
	  if ((selectedRestrictions.has("Lactose-Free")) && (prods[i].LactoseFree == false)){
		continue;
	  }
	  if ((selectedRestrictions.has("Nut-Free")) && (prods[i].NutFree == false)){
		continue;
	  }
	  if ((selectedRestrictions.has("Organic")) && (prods[i].isOrganic == false)){
		continue;
	  }
	  filteredProducts.push(prods[i]);
	}
	return filteredProducts;
  }

function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
