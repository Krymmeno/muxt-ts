export type ProductType = {id: number, name: string, description: string, image: string, amount?: number}

export const PRODUCTS: ProductType[] = [
    {
        id: 1,
        name: "Ibumetin® forte 400mg",
        description: "Ibumetin is a nonsteroidal anti-inflammatory drug (NSAID) used to relieve pain, reduce inflammation, and lower fever.",
        image: "/images/ibumetin.jpg"
    },
    {
        id: 2,
        name: "ratioDolor® Ibuprofen 400 mg",
        description: "Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) used to relieve pain, reduce inflammation, and lower fever.",
        image: "/images/ratioDolor.jpg"
    },
    {
        id: 3,
        name: "NUROFEN® Rapid Weichkapseln 400mg",
        description: "Nurofen is a brand of ibuprofen, which is an NSAID used for pain relief, fever reduction, and reducing inflammation.",
        image: "/images/nuprofen.jpg"
    },
    {
        id: 4,
        name: "Redcare Halstabletten Propolis",
        description: "Propolis is a natural substance collected by bees and is used as a traditional remedy for various purposes, including immune support and wound healing.",
        image: "/images/redcare.jpg"
    },
    {
        id: 5,
        name: "Mexalen® 500 mg Tabletten",
        description: "Mexalen is a brand of paracetamol (acetaminophen), which is a common over-the-counter pain reliever and fever reducer.",
        image: "/images/mexalen.jpg"
    }
]