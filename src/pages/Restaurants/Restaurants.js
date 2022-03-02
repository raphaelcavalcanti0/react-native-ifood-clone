import { StatusBar } from "expo-status-bar"
import { useState, useEffect } from 'react'
import { BannerView, ButtonTipoSelect, CategoriaView, SelectTipo, TextTipoSelect, TituloRestaurantes, ViewPrincipal, ViewRestaurantes } from './styles'
import { RestaurantItem } from "../../components/RestaurantItem/RestaurantItem"
import { CategoryItem } from '../../components/CategoryItem/CategoryItem'
import { BannerItem } from '../../components/BannerItem/BannerItem'

const db = require('../../../db.json')

export const Restaurants = () => {

    const [banners, setBanner] = useState([])
    const [categories, setCategories] = useState([])
    const [restaurants, setRestaurants] = useState([])
    const [tipo, setTipo] = useState('Entrega')

    useEffect(() => {
        setBanner(db.banner_principal)
        setCategories(db.categorias)
        setRestaurants(db.restaurantes)
    }, [])

    return (
        <ViewPrincipal>
            <StatusBar style="theme-dark" />
            <SelectTipo>
                <ButtonTipoSelect onPress={() => setTipo('Entrega')}>
                    <TextTipoSelect selected={tipo == 'Entrega'}>
                        Entrega
                    </TextTipoSelect>
                </ButtonTipoSelect>
                <ButtonTipoSelect onPress={() => setTipo('Retirada')}>
                    <TextTipoSelect selected={tipo == 'Retirada'}>
                        Retirada
                    </TextTipoSelect>
                </ButtonTipoSelect>
            </SelectTipo>
            <CategoriaView
                horizontal={true}
                showHorizontalScrollIndicator={false}>

                {categories.map(categoria => (
                    <CategoryItem
                        key={categoria.key}
                        foto={categoria.img_url}
                        texto={categoria.nome}
                    />
                ))}

            </CategoriaView>
            <BannerView>
                {banners.map(banner => (
                    <BannerItem
                        key={banner.id}
                        foto={banner.banner_img_url}
                    />
                ))}
            </BannerView>
            <TituloRestaurantes>Restaurantes</TituloRestaurantes>
            <ViewRestaurantes>
                {restaurants.map(restaurant => (
                    <RestaurantItem
                        key={restaurant.id}
                        foto={restaurant.url_img}
                        nome={restaurant.nome}
                        nota={restaurant.nota}
                        categoria={restaurant.categoria}
                        distancia={restaurant.distancia}
                        valorFrete={restaurant.valor_frete}
                        tempoEntrega={restaurant.tempo_entrega}
                    />
                ))}
            </ViewRestaurantes>
        </ViewPrincipal>
    )
}