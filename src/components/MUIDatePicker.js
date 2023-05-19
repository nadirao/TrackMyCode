import { Box} from "@material-ui/core";
// import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"
import { DatePicker } from "@mui/x-date-pickers";

export default function MuiDatePicker(){
    // const [value, setValue] = useState(null);

    return(
        <Box>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                {/* currently controlled, wip change to controlled */}
                <DatePicker/>
            </LocalizationProvider>
        </Box>
    )
}