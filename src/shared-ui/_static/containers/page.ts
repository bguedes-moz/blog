import styled from "styled-components";
import { COLORS } from "../colors";

export const Page = styled.main`
  min-height: 100vh;
  background-color: ${COLORS.LAVENDER_WEB};
  padding-top: 348px;

  @media (max-width: 768px) {
    padding: 0;
    min-height: auto;
  }
`;