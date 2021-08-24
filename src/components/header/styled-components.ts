import { COLORS } from "shared-ui/_static/colors";
import { mainFont } from "shared-ui/_static/typography";
import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  height: 300px;
  width: 100%;
  padding: 24px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.DARK_LIVER};
  box-shadow: 0 0 8px ${COLORS.BLACK};
`;

export const  InfoContainer = styled.div`
  display: flex;
`;

export const AvatarContainer = styled.div`
  position: relative;
`;

/*

  :hover {

    img {
      width: 320px;
      height: 320px;
      box-shadow: 0 0 36px ${COLORS.WHITE};
    }

    div {
      opacity: 1;
    }

  }

*/

export const Avatar = styled.img`
  width: 260px;
  height: 260px;
  border-radius: 50%;
  box-shadow: 0 0 12px ${COLORS.BLACK};
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
`;

export const Name =  styled.h1`
  color: ${COLORS.WHITE};
  font-family: ${mainFont};
  font-size: 38px;
  margin: 0;
  padding-bottom: 6px;
`;

export const InformationContainer = styled.div`
  display: flex;
  align-items: flex-end;
  padding-bottom: 6px;
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
`;

export const ContactList = styled.nav`
  display: flex;
  align-items: center;

  * {
    margin-right: 8px;
  }
`;

export const Anchor = styled.a`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;