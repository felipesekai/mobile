import React from 'react';
import { Text, VStack } from 'native-base';
import { ViewProps } from 'react-native';
import { THEME } from '../theme';

interface Props extends ViewProps {
    title: string;
    subTitle: string;
}
export function Heading({ title, subTitle, ...rest }: Props) {
    return (
        <VStack w='full' p={8}>
            <Text color={THEME.COLORS.TEXT} fontSize={THEME.FONT_SIZE.LG} fontFamily={THEME.FONT_FAMILY.BLACK} >
                {title}
            </Text>
            <Text color={THEME.COLORS.CAPTION_400} fontSize={THEME.FONT_SIZE.MD} fontFamily={THEME.FONT_FAMILY.REGULAR} >
                {subTitle}
            </Text>
        </VStack>
    );
}