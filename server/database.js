// Função que retorna um array
function fetchData() {
    const rawData = [
        {
            date: "2024-02-09",
            pageViews: 12,
            clickedLinks: [
                { link: "www.teste.com.br", clicks: 8 },
                { link: "www.outro.com", clicks: 2 },
                { link: "www.exemplo.com", clicks: 10 },
                { link: "www.barking.us", clicks: 7 },
                { link: "www.hotzdogz.com", clicks: 6 },
                { link: "www.chocolate.com.br", clicks: 5 },
                { link: "www.thetest.com", clicks: 8 },
                { link: "www.diewelt.du", clicks: 2 },
                { link: "www.otherone.com", clicks: 1 },
                { link: "www.sanduba.com", clicks: 0 }
            ]
        },
        {
            date: "2024-02-10",
            pageViews: 12,
            clickedLinks: [
                { link: "www.teste.com.br", clicks: 8 },
                { link: "www.outro.com", clicks: 2 },
                { link: "www.exemplo.com", clicks: 10 },
                { link: "www.barking.us", clicks: 7 },
                { link: "www.hotzdogz.com", clicks: 6 },
                { link: "www.chocolate.com.br", clicks: 5 },
                { link: "www.thetest.com", clicks: 8 },
                { link: "www.diewelt.du", clicks: 2 },
                { link: "www.otherone.com", clicks: 1 },
                { link: "www.sanduba.com", clicks: 0 }
            ]
        },
        {
            date: "2024-02-11",
            pageViews: 11,
            clickedLinks: [
                { link: "www.teste.com.br", clicks: 8 },
                { link: "www.outro.com", clicks: 2 },
                { link: "www.exemplo.com", clicks: 10 },
                { link: "www.barking.us", clicks: 7 },
                { link: "www.hotzdogz.com", clicks: 6 },
                { link: "www.chocolate.com.br", clicks: 5 },
                { link: "www.thetest.com", clicks: 8 },
                { link: "www.diewelt.du", clicks: 2 },
                { link: "www.otherone.com", clicks: 1 },
                { link: "www.sanduba.com", clicks: 0 }
            ]
        },
        {
            date: "2024-02-12",
            pageViews: 1,
            clickedLinks: [
                { link: "www.teste.com.br", clicks: 5 },
                { link: "www.outro.com", clicks: 15 },
                { link: "www.exemplo.com", clicks: 23 },
                { link: "www.barking.us", clicks: 12 },
                { link: "www.hotzdogz.com", clicks: 1 },
                { link: "www.chocolate.com.br", clicks: 2 },
                { link: "www.thetest.com", clicks: 42 },
                { link: "www.diewelt.du", clicks: 22 },
                { link: "www.otherone.com", clicks: 7 },
                { link: "www.sanduba.com", clicks: 1 }
            ]
        },
        {
            date: "2024-02-13",
            pageViews: 12,
            clickedLinks: [
                { link: "www.teste.com.br", clicks: 12 },
                { link: "www.outro.com", clicks: 28 },
                { link: "www.exemplo.com", clicks: 19 },
                { link: "www.barking.us", clicks: 8 },
                { link: "www.hotzdogz.com", clicks: 10 },
                { link: "www.chocolate.com.br", clicks: 0 },
                { link: "www.thetest.com", clicks: 5 },
                { link: "www.diewelt.du", clicks: 7 },
                { link: "www.otherone.com", clicks: 31 },
                { link: "www.sanduba.com", clicks: 29 }
            ]
        },
        {
            date: "2024-02-14",
            pageViews: 30,
            clickedLinks: [
                { link: "www.teste.com.br", clicks: 20 },
                { link: "www.outro.com", clicks: 5 },
                { link: "www.exemplo.com", clicks: 6 },
                { link: "www.barking.us", clicks: 12 },
                { link: "www.hotzdogz.com", clicks: 2 },
                { link: "www.chocolate.com.br", clicks: 5 },
                { link: "www.thetest.com", clicks: 6 },
                { link: "www.diewelt.du", clicks: 9 },
                { link: "www.otherone.com", clicks: 16 },
                { link: "www.sanduba.com", clicks: 2 }
            ]
        },
        {
            date: "2024-02-15",
            pageViews: 20,
            clickedLinks: [
                { link: "www.teste.com.br", clicks: 10 },
                { link: "www.outro.com", clicks: 3 },
                { link: "www.exemplo.com", clicks: 7 },
                { link: "www.barking.us", clicks: 12 },
                { link: "www.hotzdogz.com", clicks: 2 },
                { link: "www.chocolate.com.br", clicks: 5 },
                { link: "www.thetest.com", clicks: 6 },
                { link: "www.otherone.com", clicks: 31 },
                { link: "www.sanduba.com", clicks: 29 }
            ]
        },
        {
            date: "2024-02-16",
            pageViews: 30,
            clickedLinks: [
                { link: "www.teste.com.br", clicks: 20 },
                { link: "www.outro.com", clicks: 5 },
                { link: "www.trying.uk", clicks: 6 },
                { link: "www.barking.us", clicks: 6 },
                { link: "www.hotzdogz.com", clicks: 1 },
                { link: "www.chocolate.com.br", clicks: 2 },
                { link: "www.thetest.du", clicks: 8 },
                { link: "www.diewelt.du", clicks: 2 },
                { link: "www.otherone.com", clicks: 1 },
                { link: "www.sanduba.com", clicks: 0 }
            ]
        },
    ];
    return rawData;
}

// Exporta a função para que ela possa ser utilizada em outros arquivos
module.exports = fetchData;