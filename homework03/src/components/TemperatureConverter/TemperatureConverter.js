import "./TemperatureConverter.css";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function TemperatureConverter() {
    const [celsium, setCelsium] = React.useState();
    const [fahrenheit, setFahrenheit] = React.useState();

    const inputCelsium = (event) => {
        setCelsium(event.target.value);
        setFahrenheit(event.target.value * 1.8 + 32);
        console.log(fahrenheit);
    };

    const inputFahrenheit = (event) => {
        setFahrenheit(event.target.value);
        setCelsium((event.target.value - 32) / 1.8);
        console.log(celsium);
    };

    return (
        // FAHRENGHEIT = CELSIUM * 1.8 + 32

        <Box component="form" sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }} noValidate autoComplete="off">
            <div className="TemperatureConverter">
                <h2 className="Message__header">Температурный конвертер:</h2>
                <TextField
                    id="outlined-number-celsium"
                    label="Градусы по ЦЕЛЬСИЮ"
                    type="number"
                    slotProps={{
                        inputLabel: {
                            shrink: true,
                        },
                    }}
                    color="secondary"
                    onChange={inputCelsium}
                    value={celsium}
                />
                <h2> = </h2>
                <TextField
                    id="outlined-number-fahrengheit"
                    label="Градусы по ФАРЕНГЕЙТУ"
                    type="number"
                    slotProps={{
                        inputLabel: {
                            shrink: true,
                        },
                    }}
                    color="secondary"
                    onChange={inputFahrenheit}
                    value={fahrenheit}
                />
            </div>
        </Box>
    );
}

export default TemperatureConverter;
