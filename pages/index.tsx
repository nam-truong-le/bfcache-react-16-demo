import type {NextPage} from 'next'
import styles from '../styles/Home.module.css'
import {useState} from "react";
import {Button, TextField, Typography} from "@material-ui/core";

const Home: NextPage = () => {
    const [value, setValue] = useState("")
    return (
        <div className={styles.container}>
            <Typography color="error">State value: {value}</Typography>
            <Button variant="contained" onClick={() => window.location.href = "https://google.com"}>Click me</Button>
            <TextField label="An input field" value={value} onChange={event => setValue(event.target.value)}/>
        </div>
    )
}

export default Home
