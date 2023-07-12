import { Box, Typography, Button, Stack, Alert, AlertTitle, TextField } from "@mui/material";
import TopBar from "../components/TopBar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AlertBox from "../components/AlertBox";
import { useSelector } from "react-redux";
import "@fontsource/quicksand";
import MessageModal from "../modals/MessageModal";
import axios from "axios";

const EditPoke = () => {
    const { detailPokemon } = useSelector((state) => state.pokemon)
    const navigate = new useNavigate();
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [health, setHealth] = useState("")
    const [attack, setAttack] = useState("")
    const [defense, setDefense] = useState("")
    const [data, setData] = useState(null);
    const [message, setMessage] = useState(false);
    const [pop, setPop] = useState(false);

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
            editTheData()
    }

    const editTheData = async () => {
        const res = await axios.patch(`http://localhost:3000/pokemon/update/${detailPokemon._id}`, {
            name: name,
            description: description,
            attack: attack,
            health: health,
            defense: defense
        })
            .then(function (res) {
                if (res.status == '200') {
                    setPop({ message: 'Pokemon Updated!', type: 'success' });
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

    useEffect(() => {
        if (detailPokemon) {
            setName(detailPokemon.name)
            setDescription(detailPokemon.description)
            setHealth(detailPokemon.health)
            setAttack(detailPokemon.attack)
            setDefense(detailPokemon.defense)
        } else {
            navigate('/')
        }
    }, [detailPokemon])

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
                        bgcolor={'white'}
                        padding={4}
                        borderRadius={8}
                    >
                        <Typography variant="h5" paddingBottom={2}>
                            Edit pokemon details
                        </Typography>
                        <Stack gap={4} width={360} paddingBottom={'10px'}>
                            <TextField
                                label="Name"
                                variant="outlined"

                                value={name}
                                onChange={e => { setName(event.target.value) }}
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
                            <Button onClick={handleClick} variant="contained">Edit Details</Button>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
            {pop && <MessageModal message={pop} />}
        </>
    );
}

export default EditPoke;

