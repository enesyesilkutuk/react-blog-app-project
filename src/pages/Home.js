import { LinearProgress } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext, useEffect } from 'react';
import BlogCard from '../components/BlogCard'
import { BlogContext } from '../context/BlogContextProvider'

const Home = () => {
  const {getBlogs, cardList, isLoading} = useContext(BlogContext);

  useEffect(() => {
    getBlogs()
  }, []);
  
  return (
    <div>
      {isLoading ? (
        <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
      ):(
        <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          padding: "3rem",
        }}
        >
          {cardList?.map((card) => (
            <BlogCard key={card.id} card={{ ...card }} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Home

