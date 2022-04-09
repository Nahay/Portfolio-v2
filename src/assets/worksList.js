import * as w from './Portfolio/worksIndex';

export const worksList = [
    {
        'Development' : [
            {
                title : 'Mando',
                github:'https://github.com/Nahay/Mando',
                img:w.Mando,
                banner:w.MandoBanner,
                description: "Mando est un logiciel marchand développé en C# avec SQL Server (ADO).",
                tools: 'C#, SQL Server',
                doc: 'https://github.com/Nahay/Mando/wiki'
            },
            {
                title : 'Charlemagne VAE',
                url:'https://le-charlemagne.netlify.app',
                github:'https://github.com/Nahay/Charlemagne',
                img:w.Charlemagne,
                banner: w.CharlemagneBanner,
                description:"Le Charlemagne est un site de vente à emporter pour le restaurant d'application du lycée Pointet de Thann.",
                tools: 'React, NodeJS, Express, MongoDB',
                doc: 'https://github.com/Nahay/Charlemagne/wiki',
            },
            {
                title : 'Weeb Lampe',
                url:'https://weeblampe.000webhostapp.com',
                github:'https://github.com/Nahay/WeebLampe',
                img:w.WeebLampe,
                banner:w.WLBanner,
                description:"Weeb Lampe est un site marchand développé en PHP et MySQL.",
                tools: 'PHP, MySQL',
            },
            {
                title : 'Charlemagne Réservation',
                github:'https://github.com/Nahay/charlemagne-reservation-client',
                img:w.Charlemagne,
                description: "Site de réservation pour le restaurant Le Charlemagne.",
                tools: 'React, NodeJS, Express, MongoDB',

            },
            {
                title : 'Weeb Battle',
                url:'http://weeb-battle.000webhostapp.com',
                github:'https://github.com/Nahay/WeebBattle',
                img:w.WeebBattle,
                description: "Weeb Battle est un projet de site sur le thème des animes.",
                tools: 'PHP, MySQL',
            }
        ]
    },
    {
        'Model' : [
            {
                title : 'Maquette Portfolio',
                img:w.Mando,
                tools:'Adobe Xd, Adobe Photoshop'
            }, 
        ]
    },
    {
        'Illustration' : [
            {
                title : 'Logo',
                img:w.LogoL,
                banner:w.LogoLBanner,
                tools:'Adobe Illustrator'
            },
            {
                title : 'Illustration',
                img:w.Shiba,
                banner:w.ShibaBanner,
                tools:'Adobe Illustrator'
            },
        ]
    }
]