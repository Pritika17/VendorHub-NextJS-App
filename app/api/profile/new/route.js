import { connectToDB } from "@utils/database"
import VendorProfile from "@models/profile"

export const POST = async (req) => {
    const {VendorName, userId, BankAccountNo, BankName,   adl1, adl2, city, country, zipCode} = await req.json()

    try {
        await connectToDB();
        const newProfile = new VendorProfile({
            creator: userId,
            VendorName,
            BankAccountNo,
            BankName,
            adl1,
            adl2,
            city,
            country,
            zipCode
        })

        await newProfile.save();

        return new Response(JSON.stringify(newProfile), {status: 201})
    } catch (error) {
        return new Response("Failed to create a new Vendor Profile", ({status: 500}))
    }
}