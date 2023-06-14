import { connectToDB } from "@utils/database"
import VendorProfile from "@models/profile"

// GET (read)

export const GET = async (req, {params}) => {
    try {
        await connectToDB()

        const profile = await VendorProfile.findById(params.id).populate('creator')
        if (!profile) return new Response("Profile not found", {status:404})

        return new Response(JSON.stringify(profile), {status: 200})
    } catch (error) {
        return new Response("Failed to fetch all profiles", {status: 500})
    }
}

// PATCH (update)

export const PATCH = async (req, {params}) => {
    const {VendorName, BankAccountNo, BankName} = await req.json()

    try {
        await connectToDB()

        const existingVendorProfile = await VendorProfile.findById(params.id)

        if(!existingVendorProfile) return new Response("Profile not found", {status: 404})

        existingVendorProfile.VendorName = VendorName
        existingVendorProfile.BankAccountNo = BankAccountNo
        existingVendorProfile.BankName = BankName

        await existingVendorProfile.save()

        return new Response(JSON.stringify(existingVendorProfile), {status: 200})
    } catch (error) {
        return new Response ("Failed to update profile", {status: 500})
    }
}

// DELETE (delete)

export const DELETE = async (req, {params}) => {
    try {
        await connectToDB()

        await VendorProfile.findByIdAndRemove(params.id)

        return new Response ("Profile deleted successfully", {status: 200})
    } catch (error) {
        return new Response ("Failed to Delete profile", {status: 500})
    }
}