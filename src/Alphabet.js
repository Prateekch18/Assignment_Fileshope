import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './Alphabet.css'


function Alphabet() {
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
            margin: theme.spacing(2),
            },
        },
    }));
    const classes = useStyles();
    return (
        <div className="alpha">
            <div className={classes.root}>
                <Button className="bttn btn2" variant="contained">ALL</Button>
                <Button className="btn1" variant="contained">A</Button>
                <Button className="btn1" variant="contained">B</Button>
                <Button className="btn1" variant="contained">C</Button>
                <Button className="btn1" variant="contained">D</Button>
                <Button className="btn1" variant="contained">E</Button>
                <Button className="btn1" variant="contained">F</Button>
                <Button className="btn1" variant="contained">G</Button>
                <Button className="btn1" variant="contained">H</Button>
                <Button className="btn1" variant="contained">I</Button>
                <Button className="btn1" variant="contained">J</Button>
                <br/>
                <Button className="btn1" variant="contained">K</Button>
                <Button className="btn1" variant="contained">L</Button>
                <Button className="btn1" variant="contained">M</Button>
                <Button className="btn1" variant="contained">N</Button>
                <Button className="btn1" variant="contained">O</Button>
                <Button className="btn1" variant="contained">P</Button>
                <Button className="btn1" variant="contained">Q</Button>
                <Button className="btn1" variant="contained">R</Button>
                <Button className="btn1" variant="contained">S</Button>
                <Button className="btn1" variant="contained">T</Button>
                <Button className="btn1" variant="contained">U</Button>
                <br/>
                <Button className="btn1" variant="contained">V</Button>
                <Button className="btn1" variant="contained">W</Button>
                <Button className="btn1" variant="contained">X</Button>
                <Button className="btn1" variant="contained">Y</Button>
                <Button className="btn1" variant="contained">Z</Button>
                </div>
        </div>
    )
}

export default Alphabet
