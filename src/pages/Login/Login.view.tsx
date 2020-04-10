import styled from "styled-components";
import { rem } from "@ui/theme";

const LoginView = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  margin: auto;

  max-width: ${rem(300)};
  height: 100vh;
`;

export { LoginView };
