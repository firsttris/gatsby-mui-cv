import { Chip } from "@mui/material"
import { ReactNode } from "react"

interface Props {
    children: {
        props: {
            children: string
        }
    }
}

export const Chips: React.FC<Props> = ({children}) => {
    const labelsAsArray = children?.props?.children.split(',')
    return labelsAsArray.map((label, index) => <Chip key={index} label={label} sx={{ mx: 1 }}/>)

}