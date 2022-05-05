import * as React from "react"
import { useEffect, useState } from "react"
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  Button,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { UserCardDisplay } from "./components/UserCardDisplay"
import { SelectNumUsers } from "./components/SelectNumUsers"

export const App = () => {
  const [users, setUsers] = useState([])
  const [userCount, setUserCount] = useState(10)
  const [refresh, setRefresh] = useState(true)

  useEffect(() => {
    const getUsers = async (count: number = 10) => {
      const response = await fetch(`https://random-data-api.com/api/users/random_user?size=${count}`)
      const userJson = await response.json()
      setUsers(userJson)
    }

    getUsers(userCount)

  }, [userCount, refresh])

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <SelectNumUsers setNum={setUserCount}/>
          <Button onClick={() => setRefresh(!refresh)}>Refresh</Button>
          <UserCardDisplay users={users}/>
        </Grid>
      </Box>
    </ChakraProvider>
  )
}
