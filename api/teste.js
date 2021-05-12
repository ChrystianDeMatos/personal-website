module.exports = (req, res) => {
    // const { title = 'World' } = req.query
    // res.send(`Hello ${title}!`)
    res.send(projects)
}

function newTech (icon, name) { return {icon: icon, tooltip: name} }
const projects = [
    {
        title: "Neon Janitor 88",
        description: "Jogo criado na Unity 3D onde eu orientei minha equipe com o desenvolvimento e também atuei como programador e game designer do mesmo.",
        technologies: [
            newTech("unity", "Unity"),
            newTech("csharp", "C#")
        ],
        image: "./neonjanitor.png",
        link: "https://chrystiandematos.itch.io/neon-janitor-88"
    },
    {
        title: "Out of Control",
        description: "Jogo que foi feito com o objetivo de participar de uma Game Jam de 48h, nele fiz todo o desenvolvimento apenas ficando fora os modelos 3D e músicas.",
        technologies: [
            newTech("unity", "Unity"),
            newTech("csharp", "C#")
        ],
        image: "./outofcontrol.gif",
        link: "https://chrystiandematos.itch.io/out-of-control"
    },
    {
        title: "Space Roguelite",
        description: "Fiz toda a inteligência artificial de todos os inimigos, o jogo atualmente continua em desenvolvimento e é planejado ser lançado na loja virtual da Steam.",
        technologies: [
            newTech("unity", "Unity"),
            newTech("csharp", "C#")
        ],
        image: "./spaceroguelite.png",
        link: ""
    },
    {
        title: "Contador de Mensagens",
        description: "Bot de Discord que grava diariamente o número de mensagens enviadas em um dia no servidor, e com isso mostra os recordes para os usuários.",
        technologies: [
            newTech("nodejs", "NodeJS"),
            newTech("postgresql", "PostgreSQL"),
        ],
        image: "./msgcounter.png",
        link: "https://github.com/CristianDrift/MSG-Counter-Bot"
    },
    {
        title: "Drive Uploader",
        description: "Extensão de editor(Sony Vegas 13) que serve para enviar arquivos recém renderizados para a nuvem do Drive.",
        technologies: [
            newTech("csharp", "C#"),
            newTech("dotnet", ".NET"),
        ],
        image: "./driveuploader.png",
        link: ""
    },
    {
        title: "Site para fotógrafo",
        description: "Site feito para mostrar trabalhos do fotógrafo, além disso os clientes finais podem escolher as fotos que desejam e também olhar um preview do seu Álbum.",
        technologies: ["aspnet", "react", "mongodb"],
        technologies: [
            newTech("csharp", "C#"),
            newTech("dotnet", ".NET"),
            newTech("react", "React"),
            newTech("mongodb", "MongoDB"),
        ],
        image: "./neonjanitor.png",
        link: "https://www.figma.com/proto/UWAVndRo9zpmYwM23WMLsP/Fabio-Matos-Projeto?node-id=2%3A1&scaling=min-zoom"
    },
]