import styled from "styled-components";
import { COLORS } from "shared-ui/_static/colors";
import { mainFont } from "shared-ui/_static/typography";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 0 24px;
  }
`;

export const TalkLink = styled.a`
  font-family: ${mainFont};
  font-weight: 700;
  font-size: 28px;
  text-decoration: none;
  color: ${COLORS.SALMON};
  padding-bottom: 8px;
  text-shadow: 0 0 4px ${COLORS.BLACK}22;
  :hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const DateArea = styled.span`
  display: block;
  font-family: ${mainFont};
  font-size: 16px;
  color: ${COLORS.DARK_LIVER};
`;