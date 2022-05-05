import {
    Select,
} from "@chakra-ui/react"
import { ChangeEvent, Dispatch, SetStateAction, } from "react"


interface SelectNumUsersProps {
    setNum: Dispatch<SetStateAction<number>>
}

export const SelectNumUsers = ({ setNum }: SelectNumUsersProps) => {
    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setNum(parseInt(event.target.value))
    }
    return (
        <>
        <label htmlFor="num-users">Number of users:</label>
        <Select id="num-users" title="Number of users" onChange={(e) => handleChange(e)}>
            <option value='10'>10</option>
            <option value='15'>15</option>
            <option value='20'>20</option>
        </Select>
        </>
    )
}
