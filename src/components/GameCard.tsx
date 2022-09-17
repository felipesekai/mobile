import React from 'react';
import { Text, VStack, } from 'native-base';
import { ImageBackground, StyleSheet, TouchableOpacity, ImageSourcePropType, TouchableOpacityProps } from 'react-native';
import { THEME } from '../theme';
import { LinearGradient } from 'expo-linear-gradient';

export interface GameCardProps {
    id: string;
    name: string;
    ads: string;
    cover: ImageSourcePropType
}

interface Props extends TouchableOpacityProps {
    data: GameCardProps
}


export function GameCard({ data, ...rest }: Props) {
    return (

        <TouchableOpacity style={styles.container}>
            <ImageBackground style={styles.cover}
                source={data.cover}

            >
                <LinearGradient colors={THEME.COLORS.FOOTER}
                    style={styles.footer}
                >
                    <Text style={styles.name}>{data.name}</Text>
                    <Text style={styles.ads}>{data.ads} anúncios</Text>
                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    container: {
        marginRight: 24,
    },
    cover: {
        width: 240,
        height: 320,
        justifyContent: 'flex-end',
        borderRadius: 8,
        overFlow: 'hidden',
    },
    footer: {
        width: "100%",
        height: 102,
        padding: 16,
        justifyContent: 'flex-end',
    },
    name: {
        color: THEME.COLORS.TEXT,
        fontSize: THEME.FONT_SIZE.MD,
        fontFamily: THEME.FONT_FAMILY.BOLD
    },
    ads: {
        color: THEME.COLORS.CAPTION_300,
        fontSize: THEME.FONT_SIZE.MD,
        fontFamily: THEME.FONT_FAMILY.REGULAR
    },
});