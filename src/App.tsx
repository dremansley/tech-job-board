import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import Login from './components/Login/Login.tsx';
import SavedJobs from "./components/SavedJobs.tsx";
import JobList from "./components/JobList.tsx";
import Box from "@mui/material/Box";

function App() {
    return (

        <Router>
            <>
                <Header title="Code Careers" />
                <Box sx={{padding:2}}>
                <Routes>
                    <Route path="/" element={<JobList />} />
                    <Route path="/saved" element={<SavedJobs />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
                </Box>
            </>
        </Router>
    );
}

export default App;
