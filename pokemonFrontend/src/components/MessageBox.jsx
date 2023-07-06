import { Box, Button, Typography } from "@mui/material";
import loadIcon from '../assets/loading.gif'
import { useNavigate } from "react-router-dom";

const Message = (props) => {
    const navigate = useNavigate()
    const { error, loading } = props;
    const pageReload = () => {
        navigate(0)
    }
    return (
        <>
            <Box
                display='flex'
                flexDirection="column"
                alignItems='center'
                justifyContent='center'
            >
                {loading && !error &&
                    <Box
                        display='flex'
                        flexDirection="column"
                        alignItems='center'
                        justifyContent='center'
                    >
                        <img src={loadIcon} alt="logo" />
                        <Typography variant="h3" component='div' paddingTop={4}>
                            Loading Please Wait...
                        </Typography>
                    </Box>
                }

                {error &&
                    <Box
                        display='flex'
                        flexDirection="column"
                        alignItems='center'
                        justifyContent='center'
                    >
                        <img src={loadIcon} alt="logo" />
                        <Typography variant="h3" component='div' paddingTop={4}>
                            Error with getting data...
                            Try refreshing
                        </Typography>
                        <Button onClick={pageReload} variant="contained"> Refresh</Button>
                    </Box>
                }
            </Box>
        </>
    );
}

export default Message;
<>
    <Box>

    </Box>
</>