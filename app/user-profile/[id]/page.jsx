"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import VendorProfile from "@components/VendorProfile"

const UserProfile = ({params}) => {
    const searchParams = useSearchParams()
    const userName = searchParams.get("name")

    const [userVendorProfiles, setUserVendorProfiles] = useState([])

    useEffect(() => {
        const fetchProfiles = async () => {
            const response = await fetch(`/api/users/${params?.id}/vendorProfiles`)
            const data = await response.json()

            setUserVendorProfiles(data)
        }

        if (params?.id) fetchProfiles()
    }, [params.id])

    return(
        <VendorProfile
            name = {userName}
            desc = {`Welcome to ${userName}'s personalized profile page.`}
            data = {userVendorProfiles}
        />
    )
}

export default UserProfile