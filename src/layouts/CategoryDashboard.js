import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const CategoryDashboard = () => {
    return (
        <>
             <Stack
                direction="row"
                spacing={2}
                sx={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px",
                }}
            >
                <Button variant="contained" href="#react-js">React JS</Button>
                <Button variant="contained" href="#javascript">JavaScript</Button>
                <Button variant="contained" href="#contained-buttons">
                Memory Game
                </Button>
            </Stack>
        </>
    )
}

export default CategoryDashboard;