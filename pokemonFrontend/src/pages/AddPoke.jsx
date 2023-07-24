import { Box, Typography, Button, Stack, TextField } from "@mui/material";
import TopBar from "../components/TopBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AlertBox from "../components/AlertBox";
import "@fontsource/quicksand";
import axios from "axios";
import useGetToken from "../hooks/useGetToken";

const AddPoke = () => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [health, setHealth] = useState("")
    const [attack, setAttack] = useState("")
    const [defense, setDefense] = useState("")
    const [data, setData] = useState(null);
    const [message, setMessage] = useState(false);
    const navigate = new useNavigate();
    const token = useGetToken();

    const handleClick = () => {
        setMessage(false)
        const combine = { name, description, health, attack, defense, navigate }
        setData(combine);
        checkValidation()
    }

    const checkValidation = () => {
        if (!name)
            setMessage({ message: 'Add a Name :(', type: 'warning' });
        else if (!description)
            setMessage({ message: 'Wheres the description', type: 'warning' });
        else if (!health)
            setMessage({ message: 'Pokemon needs health', type: 'warning' });
        else if (!attack)
            setMessage({ message: 'pokemon must attack!!!', type: 'warning' });
        else if (!defense)
            setMessage({ message: 'pokemon must defend themselfs', type: 'warning' });
        else
            postTheData()
    }

    const postTheData = async () => {
        const res = await axios.post('http://localhost:3000/pokemon/', {
            name: name,
            description: description,
            attack: attack,
            health: health,
            defense: defense
            
        },{
            headers: {
                "Authorization" : `Bearer ${token.token} `
            }
        })
            .then(function (res) {
                if (res.status == '201') {
                    setMessage({ message: 'Pokemon Added!', type: 'success' });
                    clearForm();
                }
                clearForm();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const clearForm = () => {
        setName("")
        setDescription("")
        setHealth("")
        setAttack("")
        setDefense("")
    }

    const goHome = () => {
        navigate('/');
    }

    return (
        < >
            <TopBar />
            <Box
                sx={{
                    paddingTop: '50px',
                    paddingBottom: '50px'
                }}

                display='flex'
                justifyContent='center'
                fontFamily='Quicksand'
            >
                <Stack direction="row">
                    <Box
                        bgcolor={'#3D3D3D'}
                        padding={4}
                        borderRadius={8}
                    >
                        <Typography variant="h5" paddingBottom={2}>
                            Add pokemon details
                        </Typography>
                        <Stack gap={4} width={360} paddingBottom={'10px'}>
                            <TextField
                                label="Name"
                                variant="outlined"
                                ariant="filled"
                                sx={{bgcolor:"white"}}
                                onChange={e => { setName(event.target.value) }}
                                value={name}
                            />
                            <TextField
                                label="Description"
                                multiline
                                rows={4}
                                ariant="filled"
                                sx={{bgcolor:"white"}}
                                onChange={e => { setDescription(event.target.value) }}
                                value={description}
                            />
                            <TextField
                                label="Health"
                                type="number"
                                ariant="filled"
                                sx={{bgcolor:"white"}}
                                InputLabelProps={{ shrink: true, }}
                                onChange={e => { setHealth(event.target.value) }}
                                value={health}
                            />
                            <TextField
                                label="Attach"
                                type="number"
                                ariant="filled"
                                sx={{bgcolor:"white"}}
                                InputLabelProps={{ shrink: true, }}
                                onChange={e => { setAttack(event.target.value) }}
                                value={attack}
                            />
                            <TextField
                                label="Defense"
                                type="number"
                                ariant="filled"
                                sx={{bgcolor:"white"}}
                                InputLabelProps={{ shrink: true, }}
                                onChange={e => { setDefense(event.target.value) }}
                                value={defense}
                            />
                        </Stack >
                        {message &&
                            <AlertBox message={message} />
                        }
                        <Stack direction="row" gap={1} display='flex' justifyContent='right' paddingTop={2}>
                            <Button onClick={goHome} variant="outlined">Canel</Button>
                            <Button onClick={handleClick} variant="contained">Add</Button>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
        </>
    );
}

export default AddPoke;