import AccountCircle from "@mui/icons-material/AccountCircle";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { useNavigate, useParams } from "react-router-dom";
import { BlogContext } from "../context/BlogContextProvider";

const DetailsCard = ({ cardDetail }) => {
  const { content, title, email, imgUrl } = cardDetail;
  const { currentUser } = useContext(AuthContext);
  const { deleteBlog } = useContext(BlogContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDelete = (id) => {
    deleteBlog(id);
    navigate("/");
  }

  return (
    <div>
      <Card
        sx={{
          margin: "3rem",
        }}
      >
        <CardMedia
          component="img"
          image={imgUrl}
          alt="image"
          sx={{ objectFit:"cover", display:"block", width:"10%", height:"auto", margin:"0 auto 2rem" }}
          draggable="false"
        />
        <CardContent
          sx={{ padding: 0 }}
        >
          <CardContent
            sx={{
              backgroundColor: "silver",
              padding:"1.5rem",
            }}
          >
            <Typography variant="h4" component="div" sx={{ mb : "1rem", fontWeight:"500" }}>
              <Box
                component="div"
              >
                {title}
              </Box>
            </Typography>
              <Box
              component="div"
              sx={{
                height:"200px",
                textIndent:"3rem",
                
              }}
            >
            <Typography sx={{ mb: 3, overflowWrap:"break-word", textAlign:"left", lineHeight:"2rem", fontWeight:"600" }}>
            {content}
            </Typography>
              
            </Box>
          </CardContent>
          <CardContent sx={{ marginTop:"1rem" }}>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
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
        <CardActions disableSpacing sx={{display:"flex", justifyContent:"center", marginBottom:"2rem"}}>
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
        {currentUser.email === email ? (
          <div style={{width:"30%", margin:"0 auto"}}>
            <Button
              sx={{ display:"inline-block", width:"25%", marginRight:"1rem" }}
              fullWidth
              item
              variant="contained"
              onClick={() => navigate(`/updateblog/${id}`)}
            >
              update
            </Button>
            <Button
              sx={{ backgroundColor: "red",  display:"inline-block", width:"25%",
            ":hover":{
              bgcolor:"#e2062c",
            },
          }}
              fullWidth
              item
              variant="contained"
              onClick={() => handleDelete(id)}
            >
              delete
            </Button>
          </div>
        ) : null}
      </Card>
    </div>
  );
};

export default DetailsCard;
