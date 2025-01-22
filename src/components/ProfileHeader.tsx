import { StaticImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
import { Icon } from '@iconify-icon/react';

import { getLangFromUrl, useTranslations } from "../i18n/utils";

const ContainerBox = styled.div({
  marginTop: "20px",
  display: "flex",
  '@media (max-width: 960px)': {
    flexDirection: "column",
  },
  '@media print': {
    flexDirection: 'row'
  }
});

const IconWithSize = styled(Icon)({
  fontSize: '22px'
});

const ImageBox = styled.div({
  borderRadius: "5px",
  display: 'inline-flex',
  boxShadow: "rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px"
});

const BoxWithIcon = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "5px",
});

const ContentBox = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "20px",
  margin: "10px",
  width: "100%",
  '@media (max-width: 960px)': {
    marginTop: "20px",
  }
});

const LinkGrid = styled.div({
  display: "flex",
  gap: "15px",
  margin: "0 auto",
});

const LinkColumn = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "5px",
});

const StyledLink = styled.a({
  textDecoration: "none",
  color: "#1976d2",
});

const StyledTypography = styled.p({
  margin: 0,
  padding: 0,
  fontWeight: 400,
  '&.h3': {
    fontSize: "3rem",
    textTransform: "uppercase",
  },
  '&.h5': {
    fontSize: "1.5rem",
  },
  '&.caption': {
    lineHeight: 1.66,
    fontSize: "0.75rem",
    letterSpacing: "0.03333em"
  }
});

export const ProfileHeader = () => {

  const lang = getLangFromUrl();
  const t = useTranslations(lang);

  return (
    <ContainerBox>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ImageBox>
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
      </div>
      <ContentBox>
        <div style={{ textAlign: "center", display: "flex", flexDirection: "column" }}>
          <StyledTypography className="h3">
            Tristan Teufel
          </StyledTypography>
          <StyledTypography className="h5">
            {t('business-title')}
          </StyledTypography>
          <StyledTypography className="caption">
            {t('academic-title')}
          </StyledTypography>
        </div>
        <LinkGrid>
          <LinkColumn>
            <BoxWithIcon>
              <IconWithSize icon="openmoji:envelope" />
              <StyledLink
                href="mailto:info@teufel-it.de"
                rel="noopener"
                target="_blank"
              >
                <StyledTypography>info@teufel-it.de</StyledTypography>
              </StyledLink>
            </BoxWithIcon>
            <BoxWithIcon>
              <IconWithSize icon="openmoji:mobile-phone" />
              <StyledLink
                href="tel:+49 176 457 44166"
                rel="noopener"
                target="_blank"
              >
                <StyledTypography>+49 176 457 44166</StyledTypography>
              </StyledLink>
            </BoxWithIcon>
          </LinkColumn>
          <LinkColumn>
            <BoxWithIcon>
              <IconWithSize icon="openmoji:github" />
              <StyledLink
                href="http://github.com/firsttris"
                rel="noopener"
                target="_blank"
              >
                <StyledTypography>Github</StyledTypography>
              </StyledLink>
            </BoxWithIcon>
            <BoxWithIcon>
              <IconWithSize icon="openmoji:linkedin" />
              <StyledLink
                href="http://de.linkedin.com/in/tristanteufel"
                rel="noopener"
                target="_blank"
              >
                <StyledTypography>Linkedin</StyledTypography>
              </StyledLink>
            </BoxWithIcon>
          </LinkColumn>
        </LinkGrid>
      </ContentBox>
    </ContainerBox>
  );
};