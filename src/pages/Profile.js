import { Avatar, Card, CardContent, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext } from 'react'
import {AuthContext} from "../context/AuthContextProvider" 

const Profile = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <Card sx={{maxWidth:400, margin:"150px auto", backgroundColor:"#4caf50", color:"white", textAlign:"left"}}>
        <Avatar sx={{margin:" 2rem auto"}}>
          {currentUser.displayName
          ?.toString().split(" ")
          .map((str) => str[0])
          .join("")
          .toUpperCase()
          }
        </Avatar>
        <CardContent
          sx={{
            padding: 4,
            maxWidth: "400px",
          }}
        >
          <Box>
            <Typography color="text.secondary">
              Username
            </Typography>
            <Typography variant="h6" component="div">
            {currentUser.displayName}
          </Typography>
          </Box>
          <Box>
            <Typography color="text.secondary">
              Email
            </Typography>
            <Typography variant="h6" component="div">
            {currentUser.email}
          </Typography>
          </Box>
          <Box>
            <Typography color="text.secondary">
              Creation Time
            </Typography>
            <Typography variant="h6" component="div">
            {currentUser.metadata.creationTime}
          </Typography>
          </Box>
          <Box>
            <Typography color="text.secondary">
              Last Sign In Time
            </Typography>
            <Typography variant="h6" component="div">
            {currentUser.metadata.lastSignInTime}
          </Typography>
          </Box>
          
        </CardContent>
      </Card>
    </div>
  )
}

export default Profile