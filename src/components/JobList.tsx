import Typography from '@mui/joy/Typography';
import { styled } from '@mui/material/styles';
import Box from "@mui/material/Box";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    Checkbox,
    Divider,
    Select,
    Slider,
    Input,
    Option,
    FormControl, List, ListItem, Avatar
} from "@mui/joy";
import JobSearchForm from "./JobSearchForm.tsx";
import {CardMedia, FormControlLabel} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {FavoriteBorder} from "@mui/icons-material";
import MenuItem from "@mui/material/MenuItem";
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import {experience_levels} from "../filter_values.ts"
import * as React from "react";

const StyledContainer = styled(Box)(({ flex }) => ({
    display:"flex",
    backgroundColor:"white",
    flex:flex,
    flexDirection:"column",
    borderRadius:"12px",
    overflowY:"auto",
}));

const JobList = () => {
    return (

        <>

            <JobSearchForm/>

            <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-around", gap:1, height:"100vh", mt:2}}>

                {/*<StyledContainer flex={0.2}>*/}
                {/*    <Typography level={"h6"} sx={{fontWeight:600, padding:2, pt:2, pb:2, display:"flex", alignItems:"center", gap:1}}><TuneOutlinedIcon/> Filters</Typography>*/}
                {/*    <Divider/>*/}
                {/*    <Box sx={{padding:2}}>*/}

                {/*    /!* Salary Range Filter *!/*/}
                {/*        <Typography level="body2" sx={{ mt: 1, mb: 1, fontWeight:600 }}>*/}
                {/*        Salary Range*/}
                {/*    </Typography>*/}
                {/*    <Slider*/}
                {/*        defaultValue={[30000, 80000]}*/}
                {/*        valueLabelDisplay="auto"*/}
                {/*        min={20000}*/}
                {/*        max={100000}*/}
                {/*        step={1000}*/}
                {/*    />*/}

                {/*    /!* Experience Level Filter *!/*/}

                {/*        <Box>*/}
                {/*            <Typography level="body2" sx={{ mt: 2, mb: 1, fontWeight:600 }}>*/}
                {/*                Experience Level*/}
                {/*            </Typography>*/}
                {/*            <Box role="group" aria-labelledby="sandwich-group">*/}
                {/*                <List size="sm">*/}
                {/*                    {experience_levels.map((experience) =>*/}
                {/*                        <ListItem>*/}
                {/*                            <Checkbox label={experience} defaultChecked size={"sm"} variant={"soft"} color={"neutral"} />*/}
                {/*                        </ListItem>*/}
                {/*                    )}*/}
                {/*                </List>*/}
                {/*            </Box>*/}
                {/*        </Box>*/}

                {/*    </Box>*/}
                {/*</StyledContainer>*/}


                <StyledContainer flex={0.5}>
                    <Typography level={"h6"} sx={{fontWeight:600, padding:2, pt:2, pb:2, display:"flex", alignItems:"center", gap:1}}><ListOutlinedIcon/> 123 Results Found</Typography>
                    <Divider/>

                    <Card
                        variant="plain"
                        sx={{
                            borderRadius:0,
                            pt:2,
                            borderBottom:"1px solid #efefef",
                            boxShadow:0
                        }}
                    >
                        <CardContent>
                            <Box sx={{display:"flex", flexDirection:"row", alignItems:"center", gap:1.5}}>
                                <IconButton  sx={{ p: 0 }}>
                                    <Avatar alt="Andre" src="/" />
                                </IconButton>
                                <Typography level="h5" fontWeight="lg">
                                    Full-Stack Web Developer
                                </Typography>
                            </Box>
                            <Typography level="body2" sx={{pt:1}}>
                                Talented Full Stack Web Developer with expertise in Typescript, React, and Django. Design, build, and maintain feature-rich web applications. Join our team for exciting projects and a collaborative environment. Apply now!
                            </Typography>
                        </CardContent>
                        <CardActions buttonFlex="0 1 120px">
                            <IconButton variant="outlined" color="neutral" sx={{ mr: 'auto' }}>
                                <FavoriteBorder />
                            </IconButton>
                            <Button variant="outlined" color="neutral">
                                View
                            </Button>
                            <Button variant="solid" color="primary">
                                Apply
                            </Button>
                        </CardActions>
                    </Card>



                </StyledContainer>


                <StyledContainer flex={0.5}>
                    <Typography level={"h6"} sx={{fontWeight:600, padding:2, pt:2, pb:2, display:"flex", alignItems:"center", gap:1}}><DescriptionOutlinedIcon/> Job Details</Typography>
                    <Divider/>
                    <Box sx={{padding:4, pt:2}}>
                    {/* Job Title */}
                    <Typography level="body1" sx={{ fontWeight: 600 }}>
                        Job Title:
                    </Typography>
                    <Typography level="body2">Full Stack Web Developer</Typography>

                    {/* Company Name */}
                    <Typography level="body1" sx={{ fontWeight: 600 }}>
                        Company Name:
                    </Typography>
                    <Typography level="body2">[Your Company Name]</Typography>

                    {/* Location */}
                    <Typography level="body1" sx={{ fontWeight: 600 }}>
                        Location:
                    </Typography>
                    <Typography level="body2">[Job Location]</Typography>

                    {/* Job Type */}
                    <Typography level="body1" sx={{ fontWeight: 600 }}>
                        Job Type:
                    </Typography>
                    <Typography level="body2">Full-Time</Typography>

                    {/* Responsibilities */}
                    <Typography level="body1" sx={{ fontWeight: 600, mt: 2 }}>
                        Responsibilities:
                    </Typography>
                    <Typography level="body2">
                        - Design, develop, and maintain user-friendly web applications.
                        <br />
                        - Collaborate with front-end and back-end teams to ensure seamless integration.
                        <br />
                        - Implement and improve features for enhanced user experiences.
                        <br />
                        - Troubleshoot and debug application issues to ensure smooth functionality.
                    </Typography>

                    {/* Requirements */}
                    <Typography level="body1" sx={{ fontWeight: 600, mt: 2 }}>
                        Requirements:
                    </Typography>
                    <Typography level="body2">
                        - Bachelor's degree in Computer Science or related field.
                        <br />
                        - Proficiency in Typescript, React, and Django.
                        <br />
                        - Strong understanding of front-end and back-end development.
                        <br />
                        - Knowledge of HTML, CSS, and JavaScript.
                        <br />
                        - Experience with version control systems (e.g., Git).
                    </Typography>

                    {/* Benefits */}
                    <Typography level="body1" sx={{ fontWeight: 600, mt: 2 }}>
                        Benefits:
                    </Typography>
                    <Typography level="body2">
                        - Competitive salary and comprehensive benefits package.
                        <br />
                        - Opportunities for professional growth and skill development.
                        <br />
                        - Work on exciting and innovative projects.
                        <br />
                        - Collaborative and supportive team environment.
                    </Typography>

                    </Box>
                </StyledContainer>


            </Box>
            </>
    );
};

export default JobList;
