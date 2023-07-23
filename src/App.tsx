import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import Login from './components/Login/Login.tsx';
import SavedJobs from "./components/SavedJobs.tsx";
import JobList from "./components/JobList.tsx";
import Dashboard from "./components/Dashboard.tsx";
import Box from "@mui/material/Box";
import Sidebar from "./components/Sidebar.tsx";
import ManageListings from "./components/ManageListings.tsx";
import {useState} from "react";
import {DashboardOutlined} from "@mui/icons-material";

import {ActivePageInterface} from "./Interfaces/ActivePageInterface.tsx"

function App() {

    const [activePage, setActivePage] = useState<ActivePageInterface>({title:"Dashboard",icon: <DashboardOutlined/>})
    return (
        <Router>
            <>
                <Box sx={{ display: 'flex', flexDirection: 'row', margin:0,  padding:0 }}>
                    <Sidebar activePage={activePage} setActivePage={setActivePage}/>
                    <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                        {/* Header */}
                        <Header activePage={activePage} />

                        <Box sx={{padding:2}}>
                            <Routes>
                                <Route path="/" element={<Dashboard />} />
                                <Route path="/search" element={<JobList/>} />
                                <Route path="/saved" element={<SavedJobs />} />
                                <Route path="/manage" element={<ManageListings />} />
                                <Route path="/login" element={<Login />} />
                            </Routes>
                        </Box>
                    </Box>
                </Box>


            </>
        </Router>
    );
}

export default App;
