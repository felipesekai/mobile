import React, { Children, ReactNode } from 'react';
import { Box } from 'native-base';
import { ImageBackground } from 'react-native';
import { THEME } from '../theme';
import bgImage from '../assets/background-galaxy.png';
interface Props {
    children: ReactNode;
}

export function Background({ children }: Props) {
    return (

        <Box bgColor={THEME.COLORS.BACKGROUND_900} flex={1}>
            <ImageBackground source={bgImage}
                defaultSource={bgImage}
                style={{ flex: 1 }}
            >
                {children}
            </ImageBackground>
        </Box>
    );
}