const data_init = [
    {
        id: 1,
        nome: 'Barbearia do Zé',
        categoria: 'barbearia',
        descricao: 'Barbearia do seu Zé',
        funcionamento: '08h-22h',
        horario_abertura: '08:00',
        horario_fechamento: '22:00',
        dias: [1,2,3,4,5],
        endereco: 'Rua nossa senhora de copacabana, 2155',
        latitude: -22.9861374,
        longitude: -43.1922463,
        image: `${process.env.PUBLIC_URL}/logo192.png`,
        especialidades: [
            {
                id: 1,
                nome: 'Corte de cabelo',
                preco: 50.00,
                detalhe: 'Corte de cabelo masculino'
            },
            {
                id: 2,
                nome: 'Barba',
                preco: 30.00,
                detalhe: 'Barba completa'
            },
            {
                id: 3,
                nome: 'Pacote completo',
                preco: 70.00,
                detalhe: 'Corte de cabelo e barba'
            }
        ],
        galeria: [
            {
                id: 1,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Corte de cabelo'
            },
            {
                id: 2,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Corte de barba'
            },
            {
                id: 3,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Pintura de cabelo'
            }
        ],
        avaliacoes: [
            {
                id: 1,
                nome: 'João',
                comentario: 'Ótimo atendimento, recomendo!',
                nota: 5
            },
            {
                id: 2,
                nome: 'Maria',
                comentario: 'Muito bom, voltarei mais vezes!',
                nota: 4
            },
            {
                id: 3,
                nome: 'José',
                comentario: 'Excelente, muito satisfeito!',
                nota: 5
            }
        ]
    },
    {
        id: 2,
        nome: 'Salão da Maria',
        categoria: 'salão de beleza',
        descricao: 'Salão de beleza da Maria',
        funcionamento: '09h-20h',
        horario_abertura: '09:00',
        horario_fechamento: '20:00',
        dias: [1,2,3,4,5],
        endereco: "Rua 1, Centro, Niterói, Rio de Janeiro",
        latitude: -22.8834,
        longitude: -43.1033,
        image: `${process.env.PUBLIC_URL}/logo192.png`,
        especialidades: [
            {
                id: 1,
                nome: 'Corte de cabelo',
                preco: 50.00,
                detalhe: 'Corte de cabelo masculino'
            },
            {
                id: 2,
                nome: 'Barba',
                preco: 30.00,
                detalhe: 'Barba completa'
            },
            {
                id: 3,
                nome: 'Pacote completo',
                preco: 70.00,
                detalhe: 'Corte de cabelo e barba'
            }
        ],
        galeria: [
            {
                id: 1,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Corte de cabelo'
            },
            {
                id: 2,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Corte de barba'
            },
            {
                id: 3,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Pintura de cabelo'
            }
        ],
        avaliacoes: [
            {
                id: 1,
                nome: 'João',
                comentario: 'Ótimo atendimento, recomendo!',
                nota: 5
            },
            {
                id: 2,
                nome: 'Maria',
                comentario: 'Muito bom, voltarei mais vezes!',
                nota: 4
            },
            {
                id: 3,
                nome: 'José',
                comentario: 'Excelente, muito satisfeito!',
                nota: 5
            }
        ]
    },
    {
        id: 3,
        nome: 'Spa Relax',
        categoria: 'spa',
        descricao: 'Spa para relaxamento e bem-estar',
        funcionamento: '10h-18h',
        horario_abertura: '10:00',
        horario_fechamento: '18:00',
        dias: [1,2,3,4,5],
        endereco: "Avenida das Américas, Barra da Tijuca, Rio de Janeiro",
        latitude: -23.0152,
        longitude: -43.3643,
        image: `${process.env.PUBLIC_URL}/logo192.png`,
        especialidades: [
            {
                id: 1,
                nome: 'Corte de cabelo',
                preco: 50.00,
                detalhe: 'Corte de cabelo masculino'
            },
            {
                id: 2,
                nome: 'Barba',
                preco: 30.00,
                detalhe: 'Barba completa'
            },
            {
                id: 3,
                nome: 'Pacote completo',
                preco: 70.00,
                detalhe: 'Corte de cabelo e barba'
            }
        ],
        galeria: [
            {
                id: 1,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Corte de cabelo'
            },
            {
                id: 2,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Corte de barba'
            },
            {
                id: 3,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Pintura de cabelo'
            }
        ],
        avaliacoes: [
            {
                id: 1,
                nome: 'João',
                comentario: 'Ótimo atendimento, recomendo!',
                nota: 5
            },
            {
                id: 2,
                nome: 'Maria',
                comentario: 'Muito bom, voltarei mais vezes!',
                nota: 4
            },
            {
                id: 3,
                nome: 'José',
                comentario: 'Excelente, muito satisfeito!',
                nota: 5
            }
        ]
    },
    {
        id: 4,
        nome: 'Clínica Estética Bela',
        categoria: 'estetica',
        descricao: 'Clínica de tratamentos estéticos',
        funcionamento: '08h-19h',
        horario_abertura: '08:00',
        horario_fechamento: '19:00',
        dias: [1,2,3,4,5],
        endereco: "Rua Coronel Tamarindo, Copacabana, Rio de Janeiro",
        latitude: -22.9721,
        longitude: -43.1896,
        image: `${process.env.PUBLIC_URL}/logo192.png`,
        especialidades: [
            {
                id: 1,
                nome: 'Corte de cabelo',
                preco: 50.00,
                detalhe: 'Corte de cabelo masculino'
            },
            {
                id: 2,
                nome: 'Barba',
                preco: 30.00,
                detalhe: 'Barba completa'
            },
            {
                id: 3,
                nome: 'Pacote completo',
                preco: 70.00,
                detalhe: 'Corte de cabelo e barba'
            }
        ],
        galeria: [
            {
                id: 1,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Corte de cabelo'
            },
            {
                id: 2,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Corte de barba'
            },
            {
                id: 3,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Pintura de cabelo'
            }
        ],
        avaliacoes: [
            {
                id: 1,
                nome: 'João',
                comentario: 'Ótimo atendimento, recomendo!',
                nota: 5
            },
            {
                id: 2,
                nome: 'Maria',
                comentario: 'Muito bom, voltarei mais vezes!',
                nota: 4
            },
            {
                id: 3,
                nome: 'José',
                comentario: 'Excelente, muito satisfeito!',
                nota: 5
            }
        ]
    },
    {
        id: 5,
        nome: 'Clínica de Massagem Relaxar',
        categoria: 'massagem',
        descricao: 'Clínica especializada em massagens terapêuticas',
        funcionamento: '09h-19h',
        horario_abertura: '09:00',
        horario_fechamento: '19:00',
        dias: [1,2,3,4,5],
        endereco: "Praça XV de Novembro, Centro, Rio de Janeiro",
        latitude: -22.9075,
        longitude: -43.1765,
        image: `${process.env.PUBLIC_URL}/logo192.png`,
        especialidades: [
            {
                id: 1,
                nome: 'Corte de cabelo',
                preco: 50.00,
                detalhe: 'Corte de cabelo masculino'
            },
            {
                id: 2,
                nome: 'Barba',
                preco: 30.00,
                detalhe: 'Barba completa'
            },
            {
                id: 3,
                nome: 'Pacote completo',
                preco: 70.00,
                detalhe: 'Corte de cabelo e barba'
            }
        ],
        galeria: [
            {
                id: 1,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Corte de cabelo'
            },
            {
                id: 2,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Corte de barba'
            },
            {
                id: 3,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Pintura de cabelo'
            }
        ],
        avaliacoes: [
            {
                id: 1,
                nome: 'João',
                comentario: 'Ótimo atendimento, recomendo!',
                nota: 5
            },
            {
                id: 2,
                nome: 'Maria',
                comentario: 'Muito bom, voltarei mais vezes!',
                nota: 4
            },
            {
                id: 3,
                nome: 'José',
                comentario: 'Excelente, muito satisfeito!',
                nota: 5
            }
        ]
    },
    {
        id: 6,
        nome: 'Clínica de Dermatologia Pele Saudável',
        categoria: 'dermatologia',
        descricao: 'Clínica especializada em cuidados com a pele',
        funcionamento: '08h-18h',
        horario_abertura: '08:00',
        horario_fechamento: '18:00',
        dias: [1,2,3,4,5],
        endereco: "Rua Dr. Satamini, Tijuca, Rio de Janeiro",
        latitude: -22.9177,
        longitude: -43.2339,
        image: `${process.env.PUBLIC_URL}/logo192.png`,
        especialidades: [
            {
                id: 1,
                nome: 'Corte de cabelo',
                preco: 50.00,
                detalhe: 'Corte de cabelo masculino'
            },
            {
                id: 2,
                nome: 'Barba',
                preco: 30.00,
                detalhe: 'Barba completa'
            },
            {
                id: 3,
                nome: 'Pacote completo',
                preco: 70.00,
                detalhe: 'Corte de cabelo e barba'
            }
        ],
        galeria: [
            {
                id: 1,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Corte de cabelo'
            },
            {
                id: 2,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Corte de barba'
            },
            {
                id: 3,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Pintura de cabelo'
            }
        ],
        avaliacoes: [
            {
                id: 1,
                nome: 'João',
                comentario: 'Ótimo atendimento, recomendo!',
                nota: 5
            },
            {
                id: 2,
                nome: 'Maria',
                comentario: 'Muito bom, voltarei mais vezes!',
                nota: 4
            },
            {
                id: 3,
                nome: 'José',
                comentario: 'Excelente, muito satisfeito!',
                nota: 5
            }
        ]
    },
    {
        id: 7,
        nome: 'Barbearia do João',
        categoria: 'barbearia',
        descricao: 'Barbearia do João',
        funcionamento: '08h-22h',
        horario_abertura: '08:00',
        horario_fechamento: '22:00',
        dias: [1,2,3,4,5],
        endereco: "Avenida Rio Branco, Centro, Rio de Janeiro",
        latitude: -22.9028,
        longitude: -43.1763,
        image: `${process.env.PUBLIC_URL}/logo192.png`,
        especialidades: [
            {
                id: 1,
                nome: 'Corte de cabelo',
                preco: 50.00,
                detalhe: 'Corte de cabelo masculino'
            },
            {
                id: 2,
                nome: 'Barba',
                preco: 30.00,
                detalhe: 'Barba completa'
            },
            {
                id: 3,
                nome: 'Pacote completo',
                preco: 70.00,
                detalhe: 'Corte de cabelo e barba'
            }
        ],
        galeria: [
            {
                id: 1,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Corte de cabelo'
            },
            {
                id: 2,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Corte de barba'
            },
            {
                id: 3,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Pintura de cabelo'
            }
        ],
        avaliacoes: [
            {
                id: 1,
                nome: 'João',
                comentario: 'Ótimo atendimento, recomendo!',
                nota: 5
            },
            {
                id: 2,
                nome: 'Maria',
                comentario: 'Muito bom, voltarei mais vezes!',
                nota: 4
            },
            {
                id: 3,
                nome: 'José',
                comentario: 'Excelente, muito satisfeito!',
                nota: 5
            }
        ]
    },
    {
        id: 8,
        nome: 'Centro de Estética Beleza Pura',
        categoria: 'estetica',
        descricao: 'Centro de estética com diversos tratamentos',
        funcionamento: '09h-21h',
        horario_abertura: '09:00',
        horario_fechamento: '21:00',
        dias: [1,2,3,4,5],
        endereco: "Rua do Lavradio, Lapa, Rio de Janeiro",
        latitude: -22.9081,
        longitude: -43.1869,
        image: `${process.env.PUBLIC_URL}/logo192.png`,
        especialidades: [
            {
                id: 1,
                nome: 'Corte de cabelo',
                preco: 50.00,
                detalhe: 'Corte de cabelo masculino'
            },
            {
                id: 2,
                nome: 'Barba',
                preco: 30.00,
                detalhe: 'Barba completa'
            },
            {
                id: 3,
                nome: 'Pacote completo',
                preco: 70.00,
                detalhe: 'Corte de cabelo e barba'
            }
        ],
        galeria: [
            {
                id: 1,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Corte de cabelo'
            },
            {
                id: 2,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Corte de barba'
            },
            {
                id: 3,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Pintura de cabelo'
            }
        ],
        avaliacoes: [
            {
                id: 1,
                nome: 'João',
                comentario: 'Ótimo atendimento, recomendo!',
                nota: 5
            },
            {
                id: 2,
                nome: 'Maria',
                comentario: 'Muito bom, voltarei mais vezes!',
                nota: 4
            },
            {
                id: 3,
                nome: 'José',
                comentario: 'Excelente, muito satisfeito!',
                nota: 5
            }
        ]
    },
    {
        id: 9,
        nome: 'Salão da Ana',
        categoria: 'salão de beleza',
        descricao: 'Salão de beleza da Ana',
        funcionamento: '10h-19h',
        horario_abertura: '10:00',
        horario_fechamento: '19:00',
        dias: [1,2,3,4,5],
        endereco: "Rua das Laranjeiras, Laranjeiras, Rio de Janeiro",
        latitude: -22.9344,
        longitude: -43.1827,
        image: `${process.env.PUBLIC_URL}/logo192.png`,
        especialidades: [
            {
                id: 1,
                nome: 'Corte de cabelo',
                preco: 50.00,
                detalhe: 'Corte de cabelo masculino'
            },
            {
                id: 2,
                nome: 'Barba',
                preco: 30.00,
                detalhe: 'Barba completa'
            },
            {
                id: 3,
                nome: 'Pacote completo',
                preco: 70.00,
                detalhe: 'Corte de cabelo e barba'
            }
        ],
        galeria: [
            {
                id: 1,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Corte de cabelo'
            },
            {
                id: 2,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Corte de barba'
            },
            {
                id: 3,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Pintura de cabelo'
            }
        ],
        avaliacoes: [
            {
                id: 1,
                nome: 'João',
                comentario: 'Ótimo atendimento, recomendo!',
                nota: 5
            },
            {
                id: 2,
                nome: 'Maria',
                comentario: 'Muito bom, voltarei mais vezes!',
                nota: 4
            },
            {
                id: 3,
                nome: 'José',
                comentario: 'Excelente, muito satisfeito!',
                nota: 5
            }
        ]
    },
    {
        id: 10,
        nome: 'Spa Tranquilo',
        categoria: 'spa',
        descricao: 'Spa para relaxamento e meditação',
        funcionamento: '09h-17h',
        horario_abertura: '09:00',
        horario_fechamento: '17:00',
        dias: [1,2,3,4,5],
        endereco: "Rua Visconde de Pirajá, Ipanema, Rio de Janeiro",
        latitude: -22.9864,
        longitude: -43.2075,
        image: `${process.env.PUBLIC_URL}/logo192.png`,
        especialidades: [
            {
                id: 1,
                nome: 'Corte de cabelo',
                preco: 50.00,
                detalhe: 'Corte de cabelo masculino'
            },
            {
                id: 2,
                nome: 'Barba',
                preco: 30.00,
                detalhe: 'Barba completa'
            },
            {
                id: 3,
                nome: 'Pacote completo',
                preco: 70.00,
                detalhe: 'Corte de cabelo e barba'
            }
        ],
        galeria: [
            {
                id: 1,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Corte de cabelo'
            },
            {
                id: 2,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Corte de barba'
            },
            {
                id: 3,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Pintura de cabelo'
            }
        ],
        avaliacoes: [
            {
                id: 1,
                nome: 'João',
                comentario: 'Ótimo atendimento, recomendo!',
                nota: 5
            },
            {
                id: 2,
                nome: 'Maria',
                comentario: 'Muito bom, voltarei mais vezes!',
                nota: 4
            },
            {
                id: 3,
                nome: 'José',
                comentario: 'Excelente, muito satisfeito!',
                nota: 5
            }
        ]
    },
    {
        id: 11,
        nome: 'Clínica Estética Perfeita',
        categoria: 'estetica',
        descricao: 'Clínica de tratamentos estéticos avançados',
        funcionamento: '08h-20h',
        horario_abertura: '08:00',
        horario_fechamento: '20:00',
        dias: [1,2,3,4,5],
        endereco: "Avenida Epitácio Pessoa, Lagoa, Rio de Janeiro",
        latitude: -22.9514,
        longitude: -43.2072,
        image: `${process.env.PUBLIC_URL}/logo192.png`,
        especialidades: [
            {
                id: 1,
                nome: 'Corte de cabelo',
                preco: 50.00,
                detalhe: 'Corte de cabelo masculino'
            },
            {
                id: 2,
                nome: 'Barba',
                preco: 30.00,
                detalhe: 'Barba completa'
            },
            {
                id: 3,
                nome: 'Pacote completo',
                preco: 70.00,
                detalhe: 'Corte de cabelo e barba'
            }
        ],
        galeria: [
            {
                id: 1,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Corte de cabelo'
            },
            {
                id: 2,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Corte de barba'
            },
            {
                id: 3,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Pintura de cabelo'
            }
        ],
        avaliacoes: [
            {
                id: 1,
                nome: 'João',
                comentario: 'Ótimo atendimento, recomendo!',
                nota: 5
            },
            {
                id: 2,
                nome: 'Maria',
                comentario: 'Muito bom, voltarei mais vezes!',
                nota: 4
            },
            {
                id: 3,
                nome: 'José',
                comentario: 'Excelente, muito satisfeito!',
                nota: 5
            }
        ]
    },
    {
        id: 12,
        nome: 'Clínica de Massagem Zen',
        categoria: 'massagem',
        descricao: 'Clínica especializada em massagens relaxantes',
        funcionamento: '09h-18h',
        horario_abertura: '09:00',
        horario_fechamento: '18:00',
        dias: [1,2,3,4,5],
        endereco: "Rua São Clemente, Botafogo, Rio de Janeiro",
        latitude: -22.9453,
        longitude: -43.1822,
        image: `${process.env.PUBLIC_URL}/logo192.png`,
        especialidades: [
            {
                id: 1,
                nome: 'Corte de cabelo',
                preco: 50.00,
                detalhe: 'Corte de cabelo masculino'
            },
            {
                id: 2,
                nome: 'Barba',
                preco: 30.00,
                detalhe: 'Barba completa'
            },
            {
                id: 3,
                nome: 'Pacote completo',
                preco: 70.00,
                detalhe: 'Corte de cabelo e barba'
            }
        ],
        galeria: [
            {
                id: 1,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Corte de cabelo'
            },
            {
                id: 2,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Corte de barba'
            },
            {
                id: 3,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Pintura de cabelo'
            }
        ],
        avaliacoes: [
            {
                id: 1,
                nome: 'João',
                comentario: 'Ótimo atendimento, recomendo!',
                nota: 5
            },
            {
                id: 2,
                nome: 'Maria',
                comentario: 'Muito bom, voltarei mais vezes!',
                nota: 4
            },
            {
                id: 3,
                nome: 'José',
                comentario: 'Excelente, muito satisfeito!',
                nota: 5
            }
        ]
    },
    {
        id: 13,
        nome: 'Clínica de Dermatologia Pele Perfeita',
        categoria: 'dermatologia',
        descricao: 'Clínica especializada em tratamentos dermatológicos',
        funcionamento: '08h-19h',
        horario_abertura: '08:00',
        horario_fechamento: '19:00',
        dias: [1,2,3,4,5],
        endereco: "Rua Conde de Bonfim, Tijuca, Rio de Janeiro",
        latitude: -22.9297,
        longitude: -43.2333,
        image: `${process.env.PUBLIC_URL}/logo192.png`,
        especialidades: [
            {
                id: 1,
                nome: 'Corte de cabelo',
                preco: 50.00,
                detalhe: 'Corte de cabelo masculino'
            },
            {
                id: 2,
                nome: 'Barba',
                preco: 30.00,
                detalhe: 'Barba completa'
            },
            {
                id: 3,
                nome: 'Pacote completo',
                preco: 70.00,
                detalhe: 'Corte de cabelo e barba'
            }
        ],
        galeria: [
            {
                id: 1,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Corte de cabelo'
            },
            {
                id: 2,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Corte de barba'
            },
            {
                id: 3,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Pintura de cabelo'
            }
        ],
        avaliacoes: [
            {
                id: 1,
                nome: 'João',
                comentario: 'Ótimo atendimento, recomendo!',
                nota: 5
            },
            {
                id: 2,
                nome: 'Maria',
                comentario: 'Muito bom, voltarei mais vezes!',
                nota: 4
            },
            {
                id: 3,
                nome: 'José',
                comentario: 'Excelente, muito satisfeito!',
                nota: 5
            }
        ]
    },
    {
        id: 14,
        nome: 'Barbearia do Pedro',
        categoria: 'barbearia',
        descricao: 'Barbearia do Pedro',
        funcionamento: '08h-22h',
        horario_abertura: '08:00',
        horario_fechamento: '22:00',
        dias: [1,2,3,4,5],
        endereco: "Avenida Atlântica, Copacabana, Rio de Janeiro",
        latitude: -22.9747,
        longitude: -43.1899,
        image: `${process.env.PUBLIC_URL}/logo192.png`,
        especialidades: [
            {
                id: 1,
                nome: 'Corte de cabelo',
                preco: 50.00,
                detalhe: 'Corte de cabelo masculino'
            },
            {
                id: 2,
                nome: 'Barba',
                preco: 30.00,
                detalhe: 'Barba completa'
            },
            {
                id: 3,
                nome: 'Pacote completo',
                preco: 70.00,
                detalhe: 'Corte de cabelo e barba'
            }
        ],
        galeria: [
            {
                id: 1,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Corte de cabelo'
            },
            {
                id: 2,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Corte de barba'
            },
            {
                id: 3,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Pintura de cabelo'
            }
        ],
        avaliacoes: [
            {
                id: 1,
                nome: 'João',
                comentario: 'Ótimo atendimento, recomendo!',
                nota: 5
            },
            {
                id: 2,
                nome: 'Maria',
                comentario: 'Muito bom, voltarei mais vezes!',
                nota: 4
            },
            {
                id: 3,
                nome: 'José',
                comentario: 'Excelente, muito satisfeito!',
                nota: 5
            }
        ]
    },
    {
        id: 15,
        nome: 'Centro de Estética Beleza Natural',
        categoria: 'estetica',
        descricao: 'Centro de estética com tratamentos naturais',
        funcionamento: '09h-21h',
        horario_abertura: '09:00',
        horario_fechamento: '21:00',
        dias: [1,2,3,4,5],
        endereco: "Rua do Ouvidor, Centro, Rio de Janeiro",
        latitude: -22.9084,
        longitude: -43.1809,
        image: `${process.env.PUBLIC_URL}/logo192.png`,
        especialidades: [
            {
                id: 1,
                nome: 'Corte de cabelo',
                preco: 50.00,
                detalhe: 'Corte de cabelo masculino'
            },
            {
                id: 2,
                nome: 'Barba',
                preco: 30.00,
                detalhe: 'Barba completa'
            },
            {
                id: 3,
                nome: 'Pacote completo',
                preco: 70.00,
                detalhe: 'Corte de cabelo e barba'
            }
        ],
        galeria: [
            {
                id: 1,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Corte de cabelo'
            },
            {
                id: 2,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Corte de barba'
            },
            {
                id: 3,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Pintura de cabelo'
            }
        ],
        avaliacoes: [
            {
                id: 1,
                nome: 'João',
                comentario: 'Ótimo atendimento, recomendo!',
                nota: 5
            },
            {
                id: 2,
                nome: 'Maria',
                comentario: 'Muito bom, voltarei mais vezes!',
                nota: 4
            },
            {
                id: 3,
                nome: 'José',
                comentario: 'Excelente, muito satisfeito!',
                nota: 5
            }
        ]
    },
    {
        id: 16,
        nome: 'Salão da Carla',
        categoria: 'salão de beleza',
        descricao: 'Salão de beleza da Carla',
        funcionamento: '10h-20h',
        horario_abertura: '10:00',
        horario_fechamento: '20:00',
        dias: [1,2,3,4,5],
        endereco: "Avenida das Américas, Recreio dos Bandeirantes, Rio de Janeiro",
        latitude: -23.0027,
        longitude: -43.3802,
        image: `${process.env.PUBLIC_URL}/logo192.png`,
        especialidades: [
            {
                id: 1,
                nome: 'Corte de cabelo',
                preco: 50.00,
                detalhe: 'Corte de cabelo masculino'
            },
            {
                id: 2,
                nome: 'Barba',
                preco: 30.00,
                detalhe: 'Barba completa'
            },
            {
                id: 3,
                nome: 'Pacote completo',
                preco: 70.00,
                detalhe: 'Corte de cabelo e barba'
            }
        ],
        galeria: [
            {
                id: 1,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Corte de cabelo'
            },
            {
                id: 2,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Corte de barba'
            },
            {
                id: 3,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Pintura de cabelo'
            }
        ],
        avaliacoes: [
            {
                id: 1,
                nome: 'João',
                comentario: 'Ótimo atendimento, recomendo!',
                nota: 5
            },
            {
                id: 2,
                nome: 'Maria',
                comentario: 'Muito bom, voltarei mais vezes!',
                nota: 4
            },
            {
                id: 3,
                nome: 'José',
                comentario: 'Excelente, muito satisfeito!',
                nota: 5
            }
        ]
    },
    {
        id: 17,
        nome: 'Spa Serenidade',
        categoria: 'spa',
        descricao: 'Spa para relaxamento e serenidade',
        funcionamento: '09h-17h',
        horario_abertura: '09:00',
        horario_fechamento: '17:00',
        dias: [1,2,3,4,5],
        endereco: "Rua Almirante Tamandaré, Copacabana, Rio de Janeiro",
        latitude: -22.9749,
        longitude: -43.1870,
        image: `${process.env.PUBLIC_URL}/logo192.png`,
        especialidades: [
            {
                id: 1,
                nome: 'Corte de cabelo',
                preco: 50.00,
                detalhe: 'Corte de cabelo masculino'
            },
            {
                id: 2,
                nome: 'Barba',
                preco: 30.00,
                detalhe: 'Barba completa'
            },
            {
                id: 3,
                nome: 'Pacote completo',
                preco: 70.00,
                detalhe: 'Corte de cabelo e barba'
            }
        ],
        galeria: [
            {
                id: 1,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Corte de cabelo'
            },
            {
                id: 2,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Corte de barba'
            },
            {
                id: 3,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Pintura de cabelo'
            }
        ],
        avaliacoes: [
            {
                id: 1,
                nome: 'João',
                comentario: 'Ótimo atendimento, recomendo!',
                nota: 5
            },
            {
                id: 2,
                nome: 'Maria',
                comentario: 'Muito bom, voltarei mais vezes!',
                nota: 4
            },
            {
                id: 3,
                nome: 'José',
                comentario: 'Excelente, muito satisfeito!',
                nota: 5
            }
        ]
    },
    {
        id: 18,
        nome: 'Clínica Estética Suprema',
        categoria: 'estetica',
        descricao: 'Clínica de tratamentos estéticos supremos',
        funcionamento: '08h-20h',
        horario_abertura: '08:00',
        horario_fechamento: '20:00',
        dias: [1,2,3,4,5],
        endereco: "Avenida Sernambetiba, Barra da Tijuca, Rio de Janeiro",
        latitude: -23.0048,
        longitude: -43.3649,
        image: `${process.env.PUBLIC_URL}/logo192.png`,
        especialidades: [
            {
                id: 1,
                nome: 'Corte de cabelo',
                preco: 50.00,
                detalhe: 'Corte de cabelo masculino'
            },
            {
                id: 2,
                nome: 'Barba',
                preco: 30.00,
                detalhe: 'Barba completa'
            },
            {
                id: 3,
                nome: 'Pacote completo',
                preco: 70.00,
                detalhe: 'Corte de cabelo e barba'
            }
        ],
        galeria: [
            {
                id: 1,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Corte de cabelo'
            },
            {
                id: 2,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Corte de barba'
            },
            {
                id: 3,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Pintura de cabelo'
            }
        ],
        avaliacoes: [
            {
                id: 1,
                nome: 'João',
                comentario: 'Ótimo atendimento, recomendo!',
                nota: 5
            },
            {
                id: 2,
                nome: 'Maria',
                comentario: 'Muito bom, voltarei mais vezes!',
                nota: 4
            },
            {
                id: 3,
                nome: 'José',
                comentario: 'Excelente, muito satisfeito!',
                nota: 5
            }
        ]
    },
    {
        id: 19,
        nome: 'Clínica de Massagem Harmonia',
        categoria: 'massagem',
        descricao: 'Clínica especializada em massagens harmoniosas',
        funcionamento: '09h-18h',
        horario_abertura: '09:00',
        horario_fechamento: '18:00',
        dias: [1,2,3,4,5],
        endereco: "Rua Dona Mariana, Botafogo, Rio de Janeiro",
        latitude: -22.9441,
        longitude: -43.1893,
        image: `${process.env.PUBLIC_URL}/logo192.png`,
        especialidades: [
            {
                id: 1,
                nome: 'Corte de cabelo',
                preco: 50.00,
                detalhe: 'Corte de cabelo masculino'
            },
            {
                id: 2,
                nome: 'Barba',
                preco: 30.00,
                detalhe: 'Barba completa'
            },
            {
                id: 3,
                nome: 'Pacote completo',
                preco: 70.00,
                detalhe: 'Corte de cabelo e barba'
            }
        ],
        galeria: [
            {
                id: 1,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Corte de cabelo'
            },
            {
                id: 2,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Corte de barba'
            },
            {
                id: 3,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Pintura de cabelo'
            }
        ],
        avaliacoes: [
            {
                id: 1,
                nome: 'João',
                comentario: 'Ótimo atendimento, recomendo!',
                nota: 5
            },
            {
                id: 2,
                nome: 'Maria',
                comentario: 'Muito bom, voltarei mais vezes!',
                nota: 4
            },
            {
                id: 3,
                nome: 'José',
                comentario: 'Excelente, muito satisfeito!',
                nota: 5
            }
        ]
    },
    {
        id: 20,
        nome: 'Clínica de Dermatologia Pele Radiante',
        categoria: 'dermatologia',
        descricao: 'Clínica especializada em cuidados com a pele radiante',
        funcionamento: '08h-19h',
        horario_abertura: '08:00',
        horario_fechamento: '19:00',
        dias: [1,2,3,4,5],
        endereco: "Rua Paulo Fernandes, Flamengo, Rio de Janeiro",
        latitude: -22.9274,
        longitude: -43.1767,
        image: `${process.env.PUBLIC_URL}/logo192.png`,
        especialidades: [
            {
                id: 1,
                nome: 'Corte de cabelo',
                preco: 50.00,
                detalhe: 'Corte de cabelo masculino'
            },
            {
                id: 2,
                nome: 'Barba',
                preco: 30.00,
                detalhe: 'Barba completa'
            },
            {
                id: 3,
                nome: 'Pacote completo',
                preco: 70.00,
                detalhe: 'Corte de cabelo e barba'
            }
        ],
        galeria: [
            {
                id: 1,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Corte de cabelo'
            },
            {
                id: 2,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Corte de barba'
            },
            {
                id: 3,
                image: `${process.env.PUBLIC_URL}/logo192.png`,
                title: 'Pintura de cabelo'
            }
        ],
        avaliacoes: [
            {
                id: 1,
                nome: 'João',
                comentario: 'Ótimo atendimento, recomendo!',
                nota: 5
            },
            {
                id: 2,
                nome: 'Maria',
                comentario: 'Muito bom, voltarei mais vezes!',
                nota: 4
            },
            {
                id: 3,
                nome: 'José',
                comentario: 'Excelente, muito satisfeito!',
                nota: 5
            }
        ]
    }
]

export default data_init;
