import { COLORS } from "shared-ui/_static/colors";
import { mainFont } from "shared-ui/_static/typography";
import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  min-height: 300px;
  width: 100%;
  padding: 24px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.DARK_LIVER};
  box-shadow: 0 0 8px ${COLORS.BLACK}55;

  @media (max-width: 768px) {
    position: relative;
    padding: 48px 0;
  }
`;

export const  InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const AvatarContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const Avatar = styled.img`
  width: 260px;
  height: 260px;
  border-radius: 50%;
  box-shadow: 0 0 12px ${COLORS.BLACK}55;
  transition-duration: 1s;
`;

export const AvatarOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${COLORS.BLACK}AA;
  transition-duration: 1s;
  opacity: 0;
`;

export const OverlayButton = styled.button`
  color: ${COLORS.WHITE};
  font-family: ${mainFont};
  font-weight: 700;
  font-size: 24px;
  text-decoration: underline;
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const PresentationCard = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 32px;
  justify-content: center;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const Name =  styled.h1`
  color: ${COLORS.WHITE};
  font-family: ${mainFont};
  font-size: 38px;
  margin: 0;
  padding-bottom: 6px;
  text-shadow: 0 0 12px ${COLORS.BLACK};

  @media (max-width: 768px) {
    padding-top: 22px;
    font-size: 32px;
    text-align: center;
  }
`;

export const InformationContainer = styled.div`
  display: flex;
  align-items: flex-end;
  padding-bottom: 6px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Info = styled.span`
  display: block;
  margin-left: 8px;
  color: ${COLORS.WHITE};
  font-family: ${mainFont};
  font-size: 14px;

  a {
    color: ${COLORS.WHITE};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

`;

export const ItalicText =  styled.span`
  display: block;
  color: ${COLORS.WHITE};
  font-family: ${mainFont};
  font-size: 16px;
  font-style: italic;
  padding: 16px 0 12px;

  a {
    color: ${COLORS.WHITE};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
  
`;

export const ContactList = styled.nav`
  
  display: flex;
  align-items: center;

  *:not(:last-child) {
    margin-right: 14px;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Anchor = styled.a`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;