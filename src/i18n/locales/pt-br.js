const login = {
    "email":{
        "label":"Email",
        "placeholder":"Digite a sua conta de email"
    },
    "number":{
         "label":"Celular/Telefone",
        "placeholder":"Digite o seu numero para contato"
    },
    "name":{
        "label":"Nome",
        "placeholder":"Digite o seu nome"
    },
    "modalidade":{
        "label":"Modalidade",
        "placeholder":"Preencha com qual modalidade prefere usar"
    },
    "password":{
        "label":"Senha",
        "placeholder":"Digite a sua senha"
    },
    "repeat_password":{
        "label":"Repita sua senha",
        "placeholder":"Digite a sua senha novamente"
    },
    "button":{
        "login":"Logar",
        "sign_up":"Cadastrar-se",
        "password":"Esqueci minha senha"
    }
}

const home = {
    "search":{
        "label":"Pesquisar",
        "placeholder":"Digite o que deseja procurar"
    },
    'carrossel':{
        'category':'Categoria',
        'description':'Descrição',
        'time':'Tempo',
        'map':'Localizaçao'
    },
    'serviceoffer':{
        'title':'Trabalhe conosco voce tambem',
        'text':'Quer aumentar a visibilidade do seu estabelecimento e ao mesmo tempo tambem conseguir novos clientes? Inscreva o seu estabelecimento'
    }
}

const translation = {
    translations: { 
        "header":{
            "price":"Planos",
            "login":"Entrar"
        },
        "components":{
            "noOptionsText":"Nenhuma opção disponível"
        },
        "login":login,
        "home":home
    }
}

export default translation