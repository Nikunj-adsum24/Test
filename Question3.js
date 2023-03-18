import {
    MongoClient
} from "mongodb";
const findSelectedProducts = async () => {
    let client;
    const connectDatabase = async () => {
        // Create client connection
        const client = await MongoClient.connect(process.env.DB_URL);
        return client;
    };
    try {
        // Connect to database
        client = await connectDatabase();
        const db = client.db();
        const selectedProducts = await db
            .collection("products")
            .find({
                price: {
                    $gt: 100
                },
                category: "electronics"
            })
            .toArray();
        return selectedProducts;
    } catch (error) {
        console.log(error);
        return;
    }
};