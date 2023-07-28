import { Box, Card, CardContent, Link, Typography } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { styled } from "@mui/system";

const BoxWithIcon = styled(Box)({
  display: "flex",
  gap: "5px",
});

export const ProfileHeader = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ boxShadow: 4, borderRadius: "5px" }}>
        <StaticImage
          src="../images/profil.png"
          alt="me"
          placeholder="blurred"
          layout="fixed"
          height={225}
          width={240}
          style={{ minWidth: 240, borderRadius: "5px" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "20px",
          m: "10px",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Typography variant="h3" sx={{ textTransform: "uppercase" }}>
            Tristan Teufel
          </Typography>
          <Typography variant="h5">Fullstack Developer</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "15px", margin: "0 auto" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "3px" }}>
            <BoxWithIcon>
              <EmailIcon />
              <Link
                href="mailto:info@teufel-it.de"
                underline="none"
                rel="noopener"
                target="_blank"
              >
                <Typography>info@teufel-it.de</Typography>
              </Link>
            </BoxWithIcon>
            <BoxWithIcon>
              <PhoneIcon />
              <Link
                href="tel:+49 176 457 44166"
                underline="none"
                rel="noopener"
                target="_blank"
              >
                <Typography>+49 176 457 44166</Typography>
              </Link>
            </BoxWithIcon>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "3px" }}>
            <BoxWithIcon>
              <GitHubIcon />
              <Link
                href="http://github.com/firsttris"
                underline="none"
                rel="noopener"
                target="_blank"
              >
                <Typography>Github</Typography>
              </Link>
            </BoxWithIcon>
            <BoxWithIcon>
              <LinkedInIcon />
              <Link
                href="http://de.linkedin.com/in/tristanteufel"
                underline="none"
                rel="noopener"
                target="_blank"
              >
                <Typography>Linkedin</Typography>
              </Link>
            </BoxWithIcon>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
