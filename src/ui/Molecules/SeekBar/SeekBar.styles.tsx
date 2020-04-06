/**
* @author tomekbuszewski
* @since 2020-04-06 06:18:00
*/

import styled from "styled-components";
import { rem, withTransition } from "@ui/theme";
// import { BaseProps as Props } from "./SeekBar.types";

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
    ${p => withTransition("width", p.theme.animations.short)};
    
    background: ${p => p.theme.colors.brand};
    
    width: ${p => p.progress};
    height: 100%;
  }
  
  &:after {
    ${p => withTransition("left", p.theme.animations.short)};
  
    background: ${p => p.theme.colors.text};
    border-radius: 100%;
    
    width: ${rem(8)};
    height: ${rem(8)};
    
    top: ${rem(-2)};
    left: calc(${p => p.progress} - ${rem(4)});
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
  position: relative;
  padding-top: ${rem(4)};
  padding-bottom: ${rem(4)};
  margin-left: ${rem(4)};
  margin-right: ${rem(4)};
`;

export { StyledSeekBarProgress, StyledSeekBarInput, StyledSeekBarWrapper }
