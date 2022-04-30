import { AccountCircle } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../context/AuthContextProvider"
import { toastInfoNotify } from "../helpers/toastNotify";

const BlogCard = ({card}) => {
  const {content, title, imgUrl, email, id} = card;
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const detailsFunc = (e) => {
    if(currentUser){
      navigate(`/details/${id}`);
    }else{
      // alert("Please log in to see the details");
      toastInfoNotify("Please log in to see the details");
      navigate("/login");
    }
  }

  return (
    <Card
      sx={{
        margin: "1rem",
        cursor: "pointer",
        maxWidth: 345,
        ":hover": {
          boxShadow: 20,
        },
      }}
    >
      <CardMedia
        component="img"
        height="280"
        width= "350"
        image={imgUrl}
        alt={imgUrl}
        sx={{ cursor: "pointer", objectFit:"scale-down"}}
        onClick={(e) => detailsFunc(e.target)}
      />
      <CardContent
        sx={{ padding: 0, width: "350px", whiteSpace: "nowrap" }}
        onClick={(e) => detailsFunc(e.target)}
      >
        <CardContent
          sx={{
            ":hover": {
              boxShadow: 20,
            },
            cursor: "pointer",
            backgroundColor: "silver",
          }}
        >
          <Typography variant="h5" component="div">
            <Box>
              {title}
            </Box>
          </Typography>
          <Typography sx={{ mb: 1.5 }} ></Typography>
          <Box
            component="div"
            sx={{
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            {content}
          </Box>
        </CardContent>
        <CardContent>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
            variant="h6"
            component="h6"
          >
            <AccountCircle sx={{ marginRight: "0.5rem" }} />
            <Box
              component="div"
              sx={{
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              {email}
            </Box>
          </Typography>
        </CardContent>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
        >
          <FavoriteIcon />
          <Typography sx={{ marginLeft: "0.4rem", marginRight: "0.4rem" }}>
            0
          </Typography>
        </IconButton>
        <IconButton aria-label="share">
          <ChatBubbleOutlineIcon />
          <Typography sx={{ marginLeft: "0.4rem" }}>0</Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default BlogCard;
