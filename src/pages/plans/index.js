import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Box } from '@mui/material'

import ContainerComponent from '../../components/container'
import FooterComponent from '../../components/footer'
import SearchComponent from './components/search'
import CarrosselComponent from './components/carrossel'
import EmptyComponent from '../../components/empty'
import {Translator} from '../../components/translate'

export default function PriceList(){

    const { t } = useTranslation()

    const[data,setdata] = useState([
        {
            'id': 1,
            'nome': 'Basic',
            'price': '$9.99',
            'Beneficios': [
                'Desconto em todos os cortes de cabelo,barba e pintura',
                'Guias com tratamentos para cuidar do seu cabelo em casa'
            ],
            'color': '#CE8946'
        },
        {
            'id': 2,
            'nome': 'Standard',
            'price': '$19.99',
            'Beneficios': [
                'Desconto em todos os cortes de cabelo,barba e pintura',
                'Guias com tratamentos para cuidar do seu cabelo em casa',
                'Desconto em tratamentos para a pele',
                'Guias de receitas para melhorar a hidratacao da pele'
            ],
            'color': '#C0C0C0'
        },
        {
            'id': 3,
            'nome': 'Premium',
            'price': '$29.99',
            'Beneficios': [
                'Desconto em todos os cortes de cabelo,barba e pintura',
                'Guias com tratamentos para cuidar do seu cabelo em casa',
                'Desconto em tratamentos para a pele',
                'Guias de receitas para melhorar a hidratacao da pele',
                'Dois cortes e hidratacoes gratis por mes',
            ],
            'color': '#FFD700'
        },
    ])

    const[searchdata,setsearchdata] = useState(data)
    
    return(
        <ContainerComponent>
            <Box
            pt={2}
            >
                <SearchComponent
                data={data}
                setsearchdata={setsearchdata}
                label={
                    <Translator
                        path="plans.search.label"
                        />
                    }
                placeholder={(t("plans.search.placeholder"))}
                />
                {
                    searchdata.length === 0 
                    ?   <EmptyComponent/> 
                    :   <CarrosselComponent
                        data={searchdata}
                        />
                }
            </Box>
            <FooterComponent/>
        </ContainerComponent>
    )

}