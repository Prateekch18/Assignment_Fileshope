import React from 'react'
import './CheckList.css'
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
function CheckList() {
        const [state, setState] = React.useState({
            fashion: false,
            food: false,
            mobile: false,
            travel:false,
            health:false,
        });
        const handleChange = (event) => {
            setState({ ...state, [event.target.name]: event.target.checked });
        };
        const { fashion,food,mobile,travel,health } = state;
        
        const useStyles = makeStyles((theme) => ({
                root: {
                display: 'flex',
                },
                formControl: {
                margin: theme.spacing(3),
                },
            }));

            const classes = useStyles();
        return (
        <div className="check">
            <div className={classes}>
            <FormGroup>
                <FormControlLabel
                    control={<Checkbox checked={fashion} onChange={handleChange} name="fashion" />}
                    label="Fashion"
                /><hr className="new"/>
                <FormControlLabel
                    control={<Checkbox checked={food} onChange={handleChange} name="food" />}
                    label="Food & Drinks"
                /><hr className="new"/>
                <FormControlLabel
                    control={<Checkbox checked={mobile} onChange={handleChange} name="mobile" />}
                    label="Mobile & Tablet"
                /><hr className="new"/>
                <FormControlLabel
                    control={<Checkbox checked={travel} onChange={handleChange} name="travel" />}
                    label="Travel"
                /><hr className="new"/>
                <FormControlLabel
                    control={<Checkbox checked={health} onChange={handleChange} name="health" />}
                    label="Beauty & Health"
                />
        </FormGroup>
        </div>
        </div>
    )
}

export default CheckList;

