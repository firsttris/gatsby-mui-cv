import { Box, Link, Typography } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { styled } from "@mui/system";
import { useLocation } from "@reach/router";

const ContainerBox = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
  '@media print': {
    flexDirection: 'row'
  }
}));

const ImageBox = styled(Box)({ borderRadius: "5px", display: 'inline-flex' });

const BoxWithIcon = styled(Box)({
  display: "flex",
  gap: "5px",
});

const ContentBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "20px",
  m: "10px",
  width: "100%",
});

const LinkGrid = styled(Box)({
  display: "flex",
  gap: "15px",
  margin: "0 auto",
});

const LinkColumn = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "5px",
});

export const ProfileHeader = () => {
  const { pathname } = useLocation();
  const isDe = pathname.includes("/de/");
  return (
    <ContainerBox>
      <Box display="flex" justifyContent="center">
        <ImageBox boxShadow={4}>
          <StaticImage
            src="../images/profil.png"
            alt="me"
            placeholder="blurred"
            layout="fixed"
            height={225}
            width={240}
            style={{
              minWidth: 240,
              borderRadius: "5px",
            }}
          />
        </ImageBox>
      </Box>
      <ContentBox>
        <Box textAlign="center" display="flex" flexDirection="column">
          <Typography variant="h3" sx={{ textTransform: "uppercase" }}>
            Tristan Teufel
          </Typography>
          <Typography variant="h5">
            {isDe ? "Senior Software Entwickler" : "Senior Software Developer"}
          </Typography>
          <Typography variant="caption">
            {isDe
              ? "Wirtschaftsinformatik (B.Sc.)"
              : "Business Informatics (B.Sc.)"}
          </Typography>
        </Box>
        <LinkGrid>
          <LinkColumn>
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
          </LinkColumn>
          <LinkColumn>
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
          </LinkColumn>
        </LinkGrid>
      </ContentBox>
    </ContainerBox>
  );
};
