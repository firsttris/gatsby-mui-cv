import { Chip } from "@mui/material"
import * as React from "react" 

interface Props {
    labels: string
}

export const Chips: React.FC<Props> = ({labels}) => {
    const labelsAsArray = labels.split(',')
    return labelsAsArray.map(label => <Chip label={label} sx={{ mx: 1 }}/>)

}