import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import Sidebar from '../../components/header/Sidebar';
import {  companyNavLinks } from '../../utils/common';
import JobApplications from './JobApplications';
import { jwtDecode } from 'jwt-decode';

const JobApplicationPage = () => {
  const token = localStorage.getItem('token');
  const decodedToken = jwtDecode(token);
  const { firstName, lastName, userType, subTitle, imgUrl } = decodedToken;

  const profileData = {
    imgUrl: imgUrl,
    profileName: firstName + ' ' + lastName,
    role: subTitle,
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <CssBaseline />
      {/* Sidebar */}
      <Sidebar profile={profileData} sideBarLists={companyNavLinks} />
     
      {/* Main Content */}
      <Box sx={{ flex: 1, backgroundColor: '#f5f5f5', p: 3, overflowY: 'auto' }} >
        <JobApplications />
      </Box>
    </Box>
  );
};

export default JobApplicationPage;
