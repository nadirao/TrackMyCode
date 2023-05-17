import { Box} from "@material-ui/core";
// import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"
import { DateCalendar} from "@mui/x-date-pickers/DateCalendar";

export default function MuiDatePicker(){
    // const [value, setValue] = useState(null);

    return(
        <Box>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                {/* currently controlled, wip change to controlled */}
                <DateCalendar/>
            </LocalizationProvider>
        </Box>
    )
}