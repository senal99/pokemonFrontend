import { Box, Typography, Button, Stack, Alert, AlertTitle, TextField } from "@mui/material";
import TopBar from "../components/TopBar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AlertBox from "../components/AlertBox";

import axios from "axios";


const AddPoke = () => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [health, setHealth] = useState("")
    const [attack, setAttack] = useState("")
    const [defense, setDefense] = useState("")

    const [data, setData] = useState(null);
    const [message, setMessage] = useState(false);

    const navigate = new useNavigate();

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
            name: data.name,
            description: data.description,
            attack: data.attack,
            health: data.health,
            defense: data.defense
        })
            .then(function (res) {
                if (res.status == '201') {
                    setMessage({ message: 'Pokemon Added!', type: 'success' });
                    clearForm();
                }
                console.log(res);
                console.log(data)
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
        <>
            <TopBar />
            <Box
                sx={{
                    height: '100vh',
                    paddingTop: '50px'
                }}
                bgcolor={'#ffe7a3'}
                display='flex'
                justifyContent='center'
            >
                <Stack direction="row">
                    <Box
                        bgcolor={'white'}
                        padding={4}
                        borderRadius={8}
                    >
                        <Typography variant="h5" component='div'>
                            Add Details Here
                        </Typography>
                        <Stack gap={4} width={350} paddingBottom={2}>
                            <TextField
                                label="Name"
                                variant="outlined"
                                onChange={e => { setName(event.target.value) }}
                                value={name}
                            />
                            <TextField
                                label="Description"
                                multiline
                                rows={4}
                                onChange={e => { setDescription(event.target.value) }}
                                value={description}
                            />
                            <TextField
                                label="Health"
                                type="number"
                                InputLabelProps={{ shrink: true, }}
                                onChange={e => { setHealth(event.target.value) }}
                                value={health}
                            />
                            <TextField
                                label="Attach"
                                type="number"
                                InputLabelProps={{ shrink: true, }}
                                onChange={e => { setAttack(event.target.value) }}
                                value={attack}
                            />
                            <TextField
                                label="Defense"
                                type="number"
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