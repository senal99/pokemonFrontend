import { Alert, AlertTitle } from "@mui/material";

const AlertBox = (props) => {
    const { message } = props;
    return (
        <>
            {message.type == 'warning' &&
                <Alert sx={{ borderRadius: '15px', bgcolor: '#ffca85' }} severity="warning">
                    <AlertTitle>Warning</AlertTitle>
                    {message.message}
                </Alert>
            }

            {message.type == 'success' &&
                <Alert sx={{ borderRadius: '15px', bgcolor: '#b3ff8c' }} severity="success">
                    <AlertTitle>Success</AlertTitle>
                    {message.message}
                </Alert>
            }

            {message.type == 'delete' &&
                <Alert sx={{ borderRadius: '15px', bgcolor: 'orange' }} severity="warning">
                    <AlertTitle>This Action Cannot be undone</AlertTitle>
                    {message.message}
                </Alert>
            }

            {message.type == 'user' &&
                <Alert sx={{ borderRadius: '15px', bgcolor: '#ff7369', color: 'black' }} severity="error">
                    <AlertTitle color="#b02117">Error</AlertTitle>
                    {message.message}
                </Alert>
            }
        </>
    );
}

export default AlertBox;