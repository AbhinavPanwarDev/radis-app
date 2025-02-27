import { Box, Container, IconButton, Typography, Button } from "@mui/joy";
import { AppBar, Toolbar } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useStyles } from "../App";
import { InfoPopover } from "./InfoPopover";
import logo from "../radis.png";

export const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <AppBar
      position="static"
      elevation={3}
      style={{ 
        backgroundColor: "#ffffff", 
        borderBottom: "1px solid #e0e0e0",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)"
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box 
              sx={{ 
                mr: 2, 
                display: "flex", 
                alignItems: "center",
                transition: "transform 0.3s ease, filter 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                  filter: "drop-shadow(0 0 10px rgba(10, 106, 202, 0.5))"
                }
              }}
            >
              <img 
                src={logo} 
                height={55} 
                alt="Radis logo" 
                style={{
                  transition: "filter 0.3s ease",
                  filter: "brightness(0.8)", // Initial dimmed effect
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = "brightness(1.2)"; // Brighten on hover
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = "brightness(0.8)"; // Return to dimmed
                }}
              />
            </Box>
            <Typography
              level="h4"
              className={classes.title}
              sx={{ 
                fontWeight: 800,
                background: "linear-gradient(45deg, #0A6ACA 30%, #3f51b5 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              Radis App
            </Typography>
          </Box>
          
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Button 
              variant="soft" 
              color="primary"
              size="sm"
              onClick={() => window.open("https://radis.github.io/", "_blank")}
            >
              Documentation
            </Button>
            
            <IconButton
              variant="soft"
              color="primary"
              onClick={() => window.open("https://github.com/suzil/radis-app", "_blank")}
              sx={{ 
                transition: "transform 0.2s",
                "&:hover": { transform: "scale(1.1)" }
              }}
            >
              <GitHubIcon style={{ fontSize: 24 }} />
            </IconButton>
            
            <InfoPopover />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
