/**
 * @author tomekbuszewski
 * @since 2020-04-06 06:18:00
 */

import styled from "styled-components";
import { rem, withTransition } from "@ui/theme";

interface SeekBarProps {
  progress?: string;
}

const StyledSeekBarProgress = styled.div<SeekBarProps>`
  width: 100%;
  height: ${rem(4)};

  position: relative;

  background: rgba(255, 255, 255, 0.1);

  &:after,
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
  }

  &:before {
    ${withTransition("width")};
    background: ${p => p.theme.colors.brand};

    width: ${p => p.progress};
    height: 100%;
  }

  &:after {
    ${withTransition("left")};
    background: ${p => p.theme.colors.text};
    border-radius: 100%;

    width: ${rem(8)};
    height: ${rem(8)};

    top: ${rem(-2)};
    left: calc(${p => p.progress} - ${rem(4)});

    display: none;

    ${p => p.theme.breakpoints.desktop} {
      display: block;
    }
  }
`;

const StyledSeekBarInput = styled.input`
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
`;

const StyledSeekBarWrapper = styled.div`
  width: 100%;
  position: relative;

  padding-top: ${rem(4)};
  padding-bottom: ${rem(4)};
  margin-left: ${rem(8)};
  margin-right: ${rem(8)};
`;

export { StyledSeekBarProgress, StyledSeekBarInput, StyledSeekBarWrapper };
