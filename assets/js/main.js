// Cria a Variável que irá armazenar o id do menu hamburguer ;
const botao__menu__hamburguer = document.querySelector('#botao__menu__hamburguer');

// Cria o evento que expande o menu navegaçao;
function expandir__menu(evento) {

    // Abre uma Condição que testa se o evento vem de um aparelho mobile, para evitar duplo click; 
    if(evento.type == 'touchstart') {
        evento.preventDefault();
    }
    // Cria a variável que seleciona qual modo está o menu navegação que fica dentro do menu hamburguer; 
    const abrir__menu__hamburguer = document.querySelector('#nav');

    // Expande o menu quando 'active' estiver selecionado;
    abrir__menu__hamburguer.classList.toggle('active');
    const ativo = abrir__menu__hamburguer.classList.contains('active');
    evento.currentTarget.setAttribute('aria-expanded', ativo);

    // Abre a condição para avisar o navegador que o menu esta aberto ou fechado, para fins de acessibilidade;
    if (ativo) {
        evento.currentTarget.setAttribute('aria-label', 'Fechar o Menu'); // Se estiver aberto 
    } else {
        evento.currentTarget.setAttribute('aria-label', 'Abrir o Menu'); // Se estiver fechado
    }
}

// Adiciona os escutadores para os eventos de click do mouse, ou em touch em caso de aparelhos Mobile;
botao__menu__hamburguer.addEventListener('click', expandir__menu);
botao__menu__hamburguer.addEventListener('touchstart', expandir__menu);