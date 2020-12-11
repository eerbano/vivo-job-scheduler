const app = {};

const jobs =
    [
        {
            id: 1,
            descricao: "Importação de arquivos de fundos",
            data_maxima_conclusao: "2019-11-10 12:00:00",
            tempo_estimado: "2 horas",
        },
        {
            id: 2,
            descricao: "Importação de dados da Base Legada",
            data_maxima_conclusao: "2019-11-11 12:00:00",
            tempo_estimado: "4 horas",
        },
        {
            id: 3,
            descricao: "Importação de dados de integração",
            data_maxima_conclusao: "2019-11-11 08:00:00",
            tempo_estimado: "6 horas",
        },
    ]

const window_start = "2019-11-10 09:00:00"
const window_end = "2019-11-11 12:00:00"

app.sequencer = () =>
{

}

app.limiter = () =>
{

}

app.scheduler = () =>
{

}

module.exports = app;