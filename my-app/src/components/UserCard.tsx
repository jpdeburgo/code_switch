import * as React from "react"
import {
    Box,
    Collapse,
    Image,
    VStack
} from "@chakra-ui/react"
import { User } from "../types/User"
import { useState } from "react"

const userCardStyle = {
    border: '1px solid black',
    padding: '10px',
    TextAlign: 'center',
    display: 'flex',
    margin: '20px',
    fontSize: "xl"
}

const aviStyle = {
    verticalAlign: 'middle',
    width: '50px',
    height: '50px',
    borderRadius: '50%'
}

interface UserCardProps {
    user: User
}

export const UserCard = ({ user }: UserCardProps) => {
    const [show, setShow] = useState(false)
    return (
        <VStack style={userCardStyle} onClick={() => setShow(!show)}>
            <Box>
                <Image src={user.avatar} style={aviStyle} />
            </Box>
            <Box>
                {user.first_name}
            </Box>
            <Box>
                {user.last_name}
            </Box>
            <Box>
                <Collapse startingHeight={0} in={show}>
                    <Box>{user.email}</Box>
                    <Box>{user.gender}</Box>
                    <Box>{user.phone_number}</Box>
                </Collapse>
            </Box>
        </VStack>
    )
}
