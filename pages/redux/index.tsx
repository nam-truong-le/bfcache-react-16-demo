import type {NextPage} from 'next'
import styles from '../../styles/Home.module.css'
import {Button, TextField, Typography} from "@material-ui/core";
import {useAppDispatch, useAppSelector} from "../../components/hooks";
import {selectValue, setValue} from "../../components/valueSlice";

const Home: NextPage = () => {
    const dispatch = useAppDispatch()
    const value = useAppSelector(selectValue)
    return (
        <div className={styles.container}>
            <Typography color="error">State value: {value}</Typography>
            <Button variant="contained" onClick={() => window.location.href = "https://google.com"}>Click
                me</Button>
            <TextField label="An input field" value={value}
                       onChange={event => dispatch(setValue(event.target.value))}/>
        </div>
    )
}

export default Home
