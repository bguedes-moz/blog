import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { COLORS } from "shared-ui/_static/colors";
import {
  Container,
  AvatarContainer,
  InfoContainer,
  Avatar,
  PresentationCard,
  Name,
  ItalicText,
  ContactList,
  Anchor,
  InformationContainer,
  Info,
} from "./styled-components";
import ProfilePic from "shared-ui/_static/images/me.jpg";

const Header = () => (
  <Container>
    <InfoContainer>
      <AvatarContainer>
        <Avatar src={ProfilePic} alt="Profile Image" />
      </AvatarContainer>
      <PresentationCard>
        <Name>Bruno Guedes</Name>
        <InformationContainer>
          <LocationOnIcon style={{ color: COLORS.WHITE }} />
          <Info>
            Porto, Portugal
          </Info>
        </InformationContainer>
        <InformationContainer>
          <LocationCityIcon style={{ color: COLORS.WHITE }} />
          <Info>
            <a href="https://mozantech.com" target="_blank" rel="noreferrer">
              Mozantech
            </a>
            , <a href="https://mindera.com" target="_blank" rel="noreferrer">
              Mindera
            </a>
          </Info>
        </InformationContainer>
        <ItalicText>
          <a href="mailto:bruno.guedes@mozantech.com">
            bruno.guedes@mozantech.com
          </a>
        </ItalicText>
        <ContactList>
          <Anchor href="https://github.com/bguedes-moz" target="_blank" rel="noreferrer">
            <GitHubIcon style={{ color: COLORS.WHITE }} />
          </Anchor>
          <Anchor href="https://www.instagram.com/brunoac.guedes/" target="_blank" rel="noreferrer">
            <InstagramIcon style={{ color: COLORS.WHITE }} />
          </Anchor>
          <Anchor href="https://twitter.com/imbguedes" target="_blank" rel="noreferrer">
            <TwitterIcon style={{ color: COLORS.WHITE }} />
          </Anchor>
          <Anchor href="https://www.linkedin.com/in/brunoacguedes/" target="_blank" rel="noreferrer">
            <LinkedInIcon style={{ color: COLORS.WHITE }} />
          </Anchor>
          <Anchor href="mailto:bruno.guedes@mozantech.com">
            <MailOutlineRoundedIcon style={{ color: COLORS.WHITE }} />
          </Anchor>
        </ContactList>
      </PresentationCard>
    </InfoContainer>
  </Container>
);

export default Header;
