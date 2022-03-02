import React from "react";
import { CategoriaView, CategoriaFoto, CategoriaTexto } from './styles';

export const CategoryItem = ({ foto, texto, key }) => {
    return (
        <CategoriaView>
            <CategoriaFoto key={key} source={{
                uri: foto.trim(),
                width: 98,
                height: 58
            }} />
            <CategoriaTexto>{texto}</CategoriaTexto>
        </CategoriaView>
    )
}