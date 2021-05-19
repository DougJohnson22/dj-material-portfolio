import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function ComposedTextField() {
    const [name, setName] = React.useState('Name');
    const [company, setCompany] = React.useState("Company");
    const [email, setEmail] = React.useState("email@email.com");
    const classes = useStyles();

    const handleChangeName = (event) => {
        setName(event.target.value);
    };
    const handleChangeCompany = (event) => {
        setCompany(event.target.value);
    };
    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <FormControl variant="outlined">
                <InputLabel htmlFor="component-outlined">Name</InputLabel>
                <OutlinedInput id="component-outlined" value={name} onChange={handleChangeName} label="Name" />
            </FormControl>
            <FormControl variant="outlined">
                <InputLabel htmlFor="component-outlined">Company</InputLabel>
                <OutlinedInput id="component-outlined" value={company} onChange={handleChangeCompany} label="Company" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="component-simple">Email</InputLabel>
                <Input id="component-simple" value={email} onChange={handleChangeEmail} />
            </FormControl>
            <TextField
                id="outlined-multiline-static"
                label="Message"
                multiline
                rows={4}
                defaultValue="Please type your message here"
                variant="outlined"
            />
            <Button variant="contained">Submit</Button>
        </form>
    );
}