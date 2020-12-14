const data = {};

data.jobs =
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

data.jobsOutside =
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
            data_maxima_conclusao: "2019-11-12 12:00:00",
            tempo_estimado: "4 horas",
        },
        {
            id: 3,
            descricao: "Importação de dados de integração",
            data_maxima_conclusao: "2019-11-13 08:00:00",
            tempo_estimado: "6 horas",
        },
    ]

data.jobsInvalidDate =
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
            data_maxima_conclusao: "20xxxxxxxxxxxxxxxx00",
            tempo_estimado: "4 horas",
        },
        {
            id: 3,
            descricao: "Importação de dados de integração",
            data_maxima_conclusao: "20xxxxxxxxxxxxxxxx00",
            tempo_estimado: "6 horas",
        },
    ]

data.jobsInvalidDuration =
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
            data_maxima_conclusao: "2019-11-12 12:00:00",
            tempo_estimado: " horas",
        },
        {
            id: 3,
            descricao: "Importação de dados de integração",
            data_maxima_conclusao: "2019-11-12 12:00:00",
            tempo_estimado: " horas",
        },
    ]

data.windowStart = "2019-11-10 09:00:00"
data.windowEnd = "2019-11-11 12:00:00"

data.invalid_date = "2019-11-11 :"


// {
//     id: 4,
//     descricao: "Importação de dados de integração",
//     data_maxima_conclusao: "2019-11-11 09:00:00",
//     tempo_estimado: "6 horas",
// },
// {
//     id: 5,
//     descricao: "Importação de dados de integração",
//     data_maxima_conclusao: "2019-11-11 10:00:00",
//     tempo_estimado: "4 horas",
// },
// {
//     id: 6,
//     descricao: "Importação de dados de integração",
//     data_maxima_conclusao: "2019-11-11 11:00:00",
//     tempo_estimado: "2 horas",
// },

module.exports = data;