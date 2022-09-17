import React from 'react';
import { FlatList, Image, VStack } from 'native-base';
import { SafeAreaView } from 'react-native';
import logoImg from '../assets/logo-nlw-esports.png';
import { Heading } from '../components/Heading';
import { GameCard } from '../components/GameCard';
import { GAMES } from '../utils/games';
export function Home() {
    return (

        <VStack alignItems="center" >
            <Image
                source={logoImg}
                width={"214 px"}
                h={"120 px"}
                mt={"74px"}
                mb={"48px"}
                alt="logo-img"

            />

            <Heading title='Encontre seu Duo!'
                subTitle='Selecione o game que deseja jogar...'
            />
            <FlatList
                data={GAMES}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <GameCard data={item} />}
                contentContainerStyle={{
                    paddingLeft: 32,
                    paddingRight: 32
                }}
            />


        </VStack>

    );
}