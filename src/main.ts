import IProduct from "./interfaces/IProduct";
const titleInput = document.getElementById("itemTitle") as HTMLInputElement;
const sortBySelected = document.getElementById("sortBy") as HTMLSelectElement;
const filterElectronicsButton = document.getElementById("electronics") as HTMLButtonElement;
const filterJewelerysButton = document.getElementById("jewelery") as HTMLButtonElement;
const filterMensButton = document.getElementById("mens") as HTMLButtonElement;
const filterWomensButton = document.getElementById("womens") as HTMLButtonElement;
const productsContainer = document.getElementById("itemsSection") as HTMLDivElement;

fetchAndDisplayAll();
console.log("Welcome");

function fetchAndDisplayAll(){
  clearItemCards();
  fetch("https://fakestoreapi.com/products")
  .then((response: Response) => {
    if(!response.ok){
      throw new Error("Failed to fetch Data");
    }
    return response.json();
  })
  .then((data: IProduct[]) => {
      data.forEach((product: IProduct) => {
        printProduct(product);
      })
  })
}

function printProduct(product: IProduct){
  console.log(product.image)
  const cardContainer = document.querySelector("#itemContainer")!.cloneNode(true) as HTMLElement;
  (cardContainer.querySelector("#img") as HTMLImageElement).src = product.image;
  (cardContainer.querySelector("#productName") as HTMLElement).textContent = product.title;
  (cardContainer.querySelector("#price") as HTMLElement).textContent = product.price.toString();
  cardContainer.setAttribute("class", "delete");
  productsContainer.appendChild(cardContainer);
}

sortBySelected.addEventListener("change", ()=> {
  clearItemCards();
  fetch("https://fakestoreapi.com/products")
  .then((response: Response) => {
    if(!response.ok){
      throw new Error("Failed to fetch Data");
    }
    return response.json();
  })
  .then((data: IProduct[]) => {
    if (Number(sortBySelected.value) === 1){
      const sortedByLowestPriceItems:IProduct[] = data.sort((a, b) => a.price - b.price);
      sortedByLowestPriceItems.forEach((product: IProduct) => {
        printProduct(product);
      })
    }
    else if (Number(sortBySelected.value) === 2) {
      const sortedByHighestPriceItems: IProduct[] = data.sort((a, b) => b.price - a.price);
      sortedByHighestPriceItems.forEach((product: IProduct) => {
        printProduct(product);
      })
    }
    else if (Number(sortBySelected.value) === 3) {
      const sortedByBestRatingItems: IProduct[] = data.sort((a, b) => a.rating.rate - b.rating.rate);
      sortedByBestRatingItems.forEach((product: IProduct) => {
        printProduct(product);
      })
    }
    })
})

function clearItemCards() {
  const itemCard = document.querySelectorAll(".delete");
  itemCard.forEach(itemCard => itemCard.remove());
}

filterElectronicsButton.addEventListener("click", ()=> {
  clearItemCards();
  fetch("https://fakestoreapi.com/products")
  .then((response: Response) => {
    if(!response.ok){
      throw new Error("Failed to fetch Data");
    }
    return response.json();
  })
  .then((data: IProduct[]) => {
    const filteredByCategories: IProduct[] = data.filter((product: IProduct) => product.category === "electronics");
    filteredByCategories.forEach((product: IProduct) => {
      printProduct(product);
    })
  })
})

filterJewelerysButton.addEventListener("click", ()=> {
  clearItemCards();
  fetch("https://fakestoreapi.com/products")
  .then((response: Response) => {
    if(!response.ok){
      throw new Error("Failed to fetch Data");
    }
    return response.json();
  })
  .then((data: IProduct[]) => {
    const filteredByCategories: IProduct[] = data.filter((product: IProduct) => product.category === "jewelery");
    filteredByCategories.forEach((product: IProduct) => {
      printProduct(product);
    })
  })
})

filterMensButton.addEventListener("click", ()=> {
  clearItemCards();
  fetch("https://fakestoreapi.com/products")
  .then((response: Response) => {
    if(!response.ok){
      throw new Error("Failed to fetch Data");
    }
    return response.json();
  })
  .then((data: IProduct[]) => {
    const filteredByCategories: IProduct[] = data.filter((product: IProduct) => product.category === "men's clothing");
    filteredByCategories.forEach((product: IProduct) => {
      printProduct(product);
    })
  })
})

filterWomensButton.addEventListener("click", ()=> {
  clearItemCards();
  fetch("https://fakestoreapi.com/products")
  .then((response: Response) => {
    if(!response.ok){
      throw new Error("Failed to fetch Data");
    }
    return response.json();
  })
  .then((data: IProduct[]) => {
    const filteredByCategories: IProduct[] = data.filter((product: IProduct) => product.category === "women's clothing");
    filteredByCategories.forEach((product: IProduct) => {
      printProduct(product);
    })
  })
})

titleInput.addEventListener("change", ()=> {
  clearItemCards();
  fetch("https://fakestoreapi.com/products")
  .then((response: Response) => {
    if(!response.ok){
      throw new Error("Failed to fetch Data");
    }
    return response.json();
  })
  .then((data: IProduct[]) => {
    data.forEach((product: IProduct) => {
      if (product.title.includes(titleInput.value)){
        printProduct(product);
      }
    })
  })
})