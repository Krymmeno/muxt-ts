export type ProductType = {id: number, name: string, description: string, image: string, amount?: number}

export const PRODUCTS: ProductType[] = [
    {
        id: 1,
        name: "Aspirin",
        description: "Aspirin is a common pain reliever that helps reduce inflammation, fever, and minor aches and pains.",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1660&q=80"
    },
    {
        id: 2,
        name: "Ibuprofen",
        description: "Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) used to relieve pain, reduce inflammation, and lower fever.",
        image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80"
    },
    {
        id: 3,
        name: "Acetaminophen",
        description: "Acetaminophen is a pain reliever and fever reducer commonly used to treat headaches, muscle aches, arthritis, and fevers.",
        image: "https://images.unsplash.com/photo-1581159186721-b68b78da4ec9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    {
        id: 4,
        name: "Antihistamine",
        description: "Antihistamines are medications used to relieve allergy symptoms such as sneezing, itching, watery eyes, and runny nose.",
        image: "https://images.unsplash.com/photo-1544991875-5dc1b05f607d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    },
    {
        id: 5,
        name: "Antacid",
        description: "Antacids are medicines that neutralize stomach acid to relieve heartburn, acid indigestion, and stomach upset.",
        image: "https://images.unsplash.com/photo-1583088580009-2d947c3e90a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=778&q=80"
    }
]