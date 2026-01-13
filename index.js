// Array de itens do cardápio
const itens = [
    { id: "feijoadaCompleta", nome: "Feijoada Completa", preco: 25 },
    { id: "frangoQuiabo", nome: "Frango com Quiabo", preco: 22 },
    { id: "tropeiroCompleto", nome: "Tropeiro Mineiro", preco: 25 },
    { id: "tradicional", nome: "Prato Tradicional", preco: 20 },
    { id: "tropeiroApenas", nome: "Tropeiro Apenas", preco: 35 },
    { id: "feijoadaApenas", nome: "Feijoada Apenas", preco: 35 }
];

// Atualiza o total em tempo real
function atualizarTotal() {
    let total = 0;
    itens.forEach(item => {
        const qtd = parseInt(document.getElementById(item.id).value) || 0;
        total += qtd * item.preco;
    });
    document.getElementById("totalPedido").textContent = total;
}

// Finaliza pedido e envia para WhatsApp
function finalizarPedido() {
    let pedido = "Novo Pedido:\n";
    let total = 0;

    itens.forEach(item => {
        const qtd = parseInt(document.getElementById(item.id).value) || 0;
        if (qtd > 0) {
            pedido += `${qtd}x ${item.nome} - R$ ${qtd * item.preco}\n`;
            total += qtd * item.preco;
        }
    });

    if (total === 0) {
        alert("Escolha pelo menos 1 item!");
        return;
    }

    pedido += `\nTotal: R$ ${total}`;
    const mensagem = encodeURIComponent(pedido);
    const telefone = "5531999998888";
    const url = "https://wa.me/" + telefone + "?text=" + mensagem;
    window.open(url, "_blank");
}

// Inicializa total ao carregar a página
atualizarTotal();
