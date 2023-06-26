import { Box, CircularProgress, List, ListItem, ListItemText, Typography } from '@mui/material';


export default () => {
  return (
    <Box><Typography>Welcome to MUI2</Typography><CircularProgress />
    <List sx={{ listStyle: "disc", pl: 4 }}>
      <ListItem sx={{ display: "list-item" }}>
      test21111111
      </ListItem>
      <ListItem sx={{ display: "list-item" }}>
      test2
      </ListItem>
      <ListItem sx={{ display: "list-item" }}>
      test34
      </ListItem>
    </List>
    </Box>
  )
}