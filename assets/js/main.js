// Cria a Variável que irá armazenar o id do menu hamburguer ;
const menu_hamburguer = document.querySelector('#botao-menu-hamburguer');

// Cria o evento que expande o menu navegaçao;
function expandir_menu(evento) {

    // Abre uma Condição que testa se o evento vem de um aparelho mobile, para evitar duplo click; 
    if(evento.type == 'touchstart') {
        evento.preventDefault();
    }
    // Cria a variável que seleciona qual modo está o menu navegação que fica dentro do menu hamburguer; 
    const abrir_menu_hamburguer = document.querySelector('#nav');

    // Expande o menu quando 'active' estiver selecionado;
    abrir_menu_hamburguer.classList.toggle('active');
    const ativo = abrir_menu_hamburguer.classList.contains('active');
    evento.currentTarget.setAttribute('aria-expanded', ativo);

    // Abre a condição para avisar o navegador que o menu esta aberto ou fechado, para fins de acessibilidade;
    if (ativo) {
        evento.currentTarget.setAttribute('aria-label', 'Fechar o Menu'); // Se estiver aberto 
    } else {
        evento.currentTarget.setAttribute('aria-label', 'Abrir o Menu'); // Se estiver fechado
    }
}

// Adiciona os escutadores para os eventos de click do mouse, ou em touch em caso de aparelhos Mobile;
menu_hamburguer.addEventListener('click', expandir_menu);
menu_hamburguer.addEventListener('touchstart', expandir_menu);


// Controle do Fundo
function abrir_fundo() {
    document.querySelector('.fundo-pop-up').style.display = 'block';
}
function fechar_fundo() {
    document.querySelector('.fundo-pop-up').style.display = 'none';
}


// Abrir o Card Expandido do Curso em Vídeo 
function abrir_curso_em_video(){
    abrir_fundo();
    document.querySelector('#pop-up-curso-em-video').style.display = 'block';
}

// Fechar o Card Expandido do Curso em Vídeo 
function fechar_curso_em_video(){
    fechar_fundo();
    document.querySelector('#pop-up-curso-em-video').style.display = 'none';
}

// Abrir o Card Expandido do Alura Língua 
function abrir_alura_lingua(){
    abrir_fundo();
    document.querySelector('#pop-up-alura-lingua').style.display = 'block';
}
// Fechar o Card Expandido do Alura Língua 
function fechar_alura_lingua(){
    fechar_fundo();
    document.querySelector('#pop-up-alura-lingua').style.display = 'none';
}

// Abrir o Card Expandido do Alura
function abrir_alura(){
    abrir_fundo();
    document.querySelector('#pop-up-alura').style.display = 'block';
}
// Fechar o Card Expandido do Alura 
function fechar_alura(){
    fechar_fundo();
    document.querySelector('#pop-up-alura').style.display = 'none';
}

// Abrir o Card Expandido do Uninter 
function abrir_uninter(){
    abrir_fundo();
    document.querySelector('#pop-up-uninter').style.display = 'block';
}
// Fechar o Card Expandido do Uninter 
function fechar_uninter(){
    fechar_fundo();
    document.querySelector('#pop-up-uninter').style.display = 'none';
}

// Abrir o Card Expandido da Cisco
function abrir_cisco(){
    abrir_fundo();
    document.querySelector('#pop-up-cisco').style.display = 'block';
}
// Fechar o Card Expandido da Cisco 
function fechar_cisco(){
    fechar_fundo();
    document.querySelector('#pop-up-cisco').style.display = 'none';
}
