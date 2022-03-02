import React from 'react';
import { Dimensions } from 'react-native'
import { BannerView, BannerFoto } from './styles';

export const BannerItem = ({ foto, key }) => {
    return (
        <BannerView>
            <BannerFoto key={key} source={{
                uri: foto.trim(),
                width: (Dimensions.get('window').width) - 50,
                height: 180,
                resizeMode: 'contain',
            }} />
        </BannerView>
    );
}