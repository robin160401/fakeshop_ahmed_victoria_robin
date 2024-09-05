type Rating = {
    rate: number;
    count: number;
}

interface IProduct {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
    rating: Rating;
}

export default IProduct;