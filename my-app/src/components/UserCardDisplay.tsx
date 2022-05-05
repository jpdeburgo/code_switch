import * as React from "react"
import {
    Box,
    Grid,
} from "@chakra-ui/react"
import { User } from "../types/User"
import { UserCard } from "./UserCard"
import { useState } from "react"

interface UserCardDisplayProps {
    users: Array<User>
}

export const UserCardDisplay = ({ users }: UserCardDisplayProps) => {
    const [numColumns, setNumColumns] = useState(3)
    let i = 0
    const handleResize = () => {
        const { innerWidth: width } = window;
        if (numColumns === 3 && width < 900) {
            setNumColumns(2)
        }
        else if (numColumns === 2 && width >= 900) {
            setNumColumns(3)
        }
    }
    window.addEventListener("resize", handleResize);
    handleResize()
    return (
        <Box textAlign="center" fontSize="xl">
            <Grid minH="100vh" templateColumns={`repeat(${numColumns}, 1fr)`} gap={6} p={3}>
                { 
                    users.map(user =>
                        <UserCard key={i++} user={user}></UserCard>
                    )
                }
            </Grid>
        </Box>
    )
}
