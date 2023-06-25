import { Chip } from "@mui/material"

interface Props {
    labels: string
}

export const Chips: React.FC<Props> = ({labels}) => {
    const labelsAsArray = labels.split(',')
    return labelsAsArray.map(label => <Chip label={label} sx={{ mx: 1 }}/>)

}