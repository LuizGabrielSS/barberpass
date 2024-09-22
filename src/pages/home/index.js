import React, { useState } from 'react'
import { Box } from '@mui/material'

import ContainerComponent from '../../components/container'
import SearchComponent from './components/search'
import CarrosselComponent from './components/carrossel'
import DuvidasComponent from './components/duvidas'
import ServiceofferComponent from './components/serviceoffer'
import Footer from '../../components/footer'

export default function HomeScreen(){

    const[data,setdata] = useState([
    {
        id:1,
        nome:'Barbearia do Zé',
        categoria:'barbearia',
        descricao:'Barbearia do seu Zé',
        funcionamento:'08h-22h',
        endereco:'Rua nossa senhora de copacabana, 2155'
    },
    {
        id: 2,
        nome: 'Salão da Maria',
        categoria: 'salão de beleza',
        descricao: 'Salão de beleza da Maria',
        funcionamento: '09h-20h',
        endereco: 'Avenida Paulista, 1000'
    },
    {
        id: 3,
        nome: 'Spa Relax',
        categoria: 'spa',
        descricao: 'Spa para relaxamento e bem-estar',
        funcionamento: '10h-18h',
        endereco: 'Rua das Flores, 300'
    },
    {
        id: 4,
        nome: 'Clínica Estética Bela',
        categoria: 'estetica',
        descricao: 'Clínica de tratamentos estéticos',
        funcionamento: '08h-19h',
        endereco: 'Rua da Harmonia, 50'
    },
    {
        id: 5,
        nome: 'Clínica de Massagem Relaxar',
        categoria: 'massagem',
        descricao: 'Clínica especializada em massagens terapêuticas',
        funcionamento: '09h-19h',
        endereco: 'Rua do Bem-Estar, 789'
    },
    {
        id: 6,
        nome: 'Clínica de Dermatologia Pele Saudável',
        categoria: 'dermatologia',
        descricao: 'Clínica especializada em cuidados com a pele',
        funcionamento: '08h-18h',
        endereco: 'Rua da Saúde, 202'
    },
    {
        id: 7,
        nome: 'Barbearia do João',
        categoria: 'barbearia',
        descricao: 'Barbearia do João',
        funcionamento: '08h-22h',
        endereco: 'Rua dos Barbeiros, 303'
    },
    {
        id: 8,
        nome: 'Centro de Estética Beleza Pura',
        categoria: 'estetica',
        descricao: 'Centro de estética com diversos tratamentos',
        funcionamento: '09h-21h',
        endereco: 'Rua da Beleza, 404'
    },
    {
        id: 9,
        nome: 'Salão da Ana',
        categoria: 'salão de beleza',
        descricao: 'Salão de beleza da Ana',
        funcionamento: '10h-19h',
        endereco: 'Rua das Rosas, 500'
    },
    {
        id: 10,
        nome: 'Spa Tranquilo',
        categoria: 'spa',
        descricao: 'Spa para relaxamento e meditação',
        funcionamento: '09h-17h',
        endereco: 'Rua da Paz, 600'
    },
    {
        id: 11,
        nome: 'Clínica Estética Perfeita',
        categoria: 'estetica',
        descricao: 'Clínica de tratamentos estéticos avançados',
        funcionamento: '08h-20h',
        endereco: 'Rua da Beleza, 700'
    },
    {
        id: 12,
        nome: 'Clínica de Massagem Zen',
        categoria: 'massagem',
        descricao: 'Clínica especializada em massagens relaxantes',
        funcionamento: '09h-18h',
        endereco: 'Rua do Relaxamento, 800'
    },
    {
        id: 13,
        nome: 'Clínica de Dermatologia Pele Perfeita',
        categoria: 'dermatologia',
        descricao: 'Clínica especializada em tratamentos dermatológicos',
        funcionamento: '08h-19h',
        endereco: 'Rua da Saúde, 900'
    },
    {
        id: 14,
        nome: 'Barbearia do Pedro',
        categoria: 'barbearia',
        descricao: 'Barbearia do Pedro',
        funcionamento: '08h-22h',
        endereco: 'Rua dos Barbeiros, 1001'
    },
    {
        id: 15,
        nome: 'Centro de Estética Beleza Natural',
        categoria: 'estetica',
        descricao: 'Centro de estética com tratamentos naturais',
        funcionamento: '09h-21h',
        endereco: 'Rua da Natureza, 1100'
    },
    {
        id: 16,
        nome: 'Salão da Carla',
        categoria: 'salão de beleza',
        descricao: 'Salão de beleza da Carla',
        funcionamento: '10h-20h',
        endereco: 'Rua das Flores, 1200'
    },
    {
        id: 17,
        nome: 'Spa Serenidade',
        categoria: 'spa',
        descricao: 'Spa para relaxamento e serenidade',
        funcionamento: '09h-17h',
        endereco: 'Rua da Tranquilidade, 1300'
    },
    {
        id: 18,
        nome: 'Clínica Estética Suprema',
        categoria: 'estetica',
        descricao: 'Clínica de tratamentos estéticos supremos',
        funcionamento: '08h-20h',
        endereco: 'Rua da Beleza, 1400'
    },
    {
        id: 19,
        nome: 'Clínica de Massagem Harmonia',
        categoria: 'massagem',
        descricao: 'Clínica especializada em massagens harmoniosas',
        funcionamento: '09h-18h',
        endereco: 'Rua da Harmonia, 1500'
    },
    {
        id: 20,
        nome: 'Clínica de Dermatologia Pele Radiante',
        categoria: 'dermatologia',
        descricao: 'Clínica especializada em cuidados com a pele radiante',
        funcionamento: '08h-19h',
        endereco: 'Rua da Saúde, 1600'
    }
    ])

    const [searchdata,setsearchdata] = useState(data)

    return(
        <ContainerComponent
        >
            <Box
            pt={2}
            >
                <SearchComponent
                data={data}
                setsearchdata={setsearchdata}
                />
                <CarrosselComponent
                data={searchdata}
                />
                <ServiceofferComponent/>
                <DuvidasComponent/>
                <Footer/>
            </Box>
            
        </ContainerComponent>
    )
}