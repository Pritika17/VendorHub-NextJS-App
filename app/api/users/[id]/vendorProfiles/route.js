import { connectToDB } from "@utils/database"
import VendorProfile from "@models/profile"

export const GET = async (req, {params}) => {
    try {
        await connectToDB()

        const profiles = await VendorProfile.find({
            creator: params.id
        }).populate('creator')

        return new Response(JSON.stringify(profiles), {status: 200})
    } catch (error) {
        return new Response("Failed to fetch all profiles", {status: 500})
    }
}