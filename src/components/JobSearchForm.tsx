import Box from '@mui/material/Box';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import {Divider, Select, Option} from "@mui/joy";

const JobSearchForm = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                flexGrow: 1,
                padding: 0.5,
                margin: 0,
                borderRadius: 2,
                backgroundColor: '#FFFFFF',
                alignItems: 'center',
                border:'1px solid #eee',
            }}
        >
            {/* Job Title or Tags Search */}
            <Input
                type="text"
                placeholder="Enter job title or search by tags"
                startDecorator={<SearchOutlinedIcon />}
                sx={{
                    flex: 1,
                    border: 'none',
                    background: 'transparent',
                    '& input': {
                        padding:"12px",
                        paddingLeft: '10px'
                    },
                }}
            />
            <Divider orientation={"vertical"}/>
            {/* Location Search */}
            <Input
                type="text"
                variant="plain"
                placeholder="Enter a location"
                startDecorator={<LocationOnOutlinedIcon />}
                sx={{
                    flex: 1,
                    border: 'none',
                    background: 'transparent',
                    '& input': {
                        padding:"12px",
                        paddingLeft: '10px',

                    },
                    '&:focus': {
                    },
                }}
            />

            <Select value={0}>
                <Option value={0}>Select Distance Within</Option>
                <Option value={1}>1 Mile</Option>
                <Option value={5}>5 Miles</Option>
                <Option value={10}>10 Miles</Option>
                <Option value={15}>15 Miles</Option>
            </Select>

            {/* Search Button */}
            <Button
                variant="solid"
                size="sm"
                startDecorator={<SearchOutlinedIcon />}
                color={"primary"}
                sx={{
                    borderRadius:8,
                    fontWeight:600,
                    height:"100%",
                    // backgroundColor:"#2f3542",
                    ml:1, mr:1, p:1, pr:2
                }}
            >
                Search Jobs
            </Button>
        </Box>
    );
};

export default JobSearchForm;
