import { Box, Link, Typography } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import { styled } from "@mui/system";
import { Icon } from '@iconify-icon/react';

import { getLangFromUrl, useTranslations } from "../i18n/utils";

const ContainerBox = styled(Box)(({ theme }) => ({
  marginTop: "20px",
  display: "flex",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
  '@media print': {
    flexDirection: 'row'
  }
}));

const IconWithSize = styled(Icon)({
  fontSize: '22px'
})

const ImageBox = styled(Box)(({ theme }) => ({ borderRadius: "5px", display: 'inline-flex' }));

const BoxWithIcon = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "5px",
});

const ContentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "20px",
  m: "10px",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    marginTop: "20px",
  }
}));

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

  const lang = getLangFromUrl();
  const t = useTranslations(lang);

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
            {t('business-title')}
          </Typography>
          <Typography variant="caption">
            {t('academic-title')}
          </Typography>
        </Box>
        <LinkGrid>
          <LinkColumn>
            <BoxWithIcon>
              <IconWithSize icon="openmoji:envelope" />
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
              <IconWithSize icon="openmoji:mobile-phone" />
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
              <IconWithSize icon="openmoji:github" />
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
              <IconWithSize icon="openmoji:linkedin" />
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
