import React from 'react';
import { ActivityIndicator } from "react-native";
import { Center, } from 'native-base';
import { THEME } from '../theme';

export function Loading() {
    return (
        <Center flex={1}>
            <ActivityIndicator color={THEME.COLORS.PRIMARY} size={35} />

        </Center>
    );
}