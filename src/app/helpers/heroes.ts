import { Heroe } from "../interfaces/heroe";

export const HEROES_LIST: string[] = [
    "Spiderman", "Batman", "Superman", "Iron Man",
    "Captain America", "Thor", "Flash"
];

export const HEROES_LIST_FULL: Heroe[] = [
    {
        nombre: 'Superman',
        descripcion: 'El último hijo de Krypton, dotado con poderes sobrehumanos en la Tierra.',
        imagen: 'https://www.adnradio.cl/resizer/irmSXUhPqpXZZzMBWGV1smc_3fs=/768x576/filters:format(png):quality(70):focal(435x179:445x189)/cloudfront-us-east-1.images.arcpublishing.com/prisachile/A7O5GSTO5NE3NLWCQWGJ2CSFPI.png'
    },
    {
        nombre: 'Wonder Woman',
        descripcion: 'Princesa amazona con habilidades sobrehumanas y portadora de la Lazo de la Verdad.',
        imagen: 'https://www.latercera.com/resizer/Hkl1JnlsVDt98RpPAccnzWh6kXQ=/900x600/filters:focal(494x137:504x127)/cloudfront-us-east-1.images.arcpublishing.com/copesa/7S3KBGXNBFF2DJ53XC6AM2DLJE.jpg'
    },
    {
        nombre: 'Spider-Man',
        descripcion: 'Adolescente con habilidades arácnidas tras ser mordido por una araña radiactiva.',
        imagen: 'https://f.rpp-noticias.io/2020/04/01/922185spider-1jpg.jpg'
    },
    {
        nombre: 'Batman',
        descripcion: 'Millonario y genio detective que combate el crimen en Gotham City sin superpoderes.',
        imagen: 'https://los40.com/resizer/JcOFV9Jzhccjn2jSb2AyMDepMOI=/1200x900/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/prisaradiolos40/BZOO3YOJZVOJZKM6JQX3D2ZJ24.jpg'
    },
    {
        nombre: 'Iron Man',
        descripcion: 'Genio, multimillonario, playboy y filántropo que utiliza una armadura tecnológica para luchar contra el mal.',
        imagen: 'https://sm.ign.com/ign_latam/screenshot/default/im_tvtm.jpg'
    },
    {
        nombre: 'Flash',
        descripcion: 'Velocista sobrehumano que puede correr a velocidades increíbles y manipular el tiempo.',
        imagen: 'https://los40.com/resizer/CW2VvMiWvetkH1376UFgPu8T-lk=/1200x900/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/prisaradiolos40/PTRVQYOZ5JMC5LZLKFJHPT3TAY.jpg'
    },
    {
        nombre: 'Black Widow',
        descripcion: 'Espía y experta en combate cuerpo a cuerpo, miembro de los Vengadores.',
        imagen: 'https://databasecomics.com/wp-content/uploads/Natalia_Romanova_29_from_Black_Widow_Vol_8_10_Brooks_Variant_001.jpg'
    },
    {
        nombre: 'Captain America',
        descripcion: 'Super soldado con un escudo indestructible, líder de los Vengadores.',
        imagen: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/09/Captain-America-Marvel-Tales.jpg'
    },
    {
        nombre: 'Green Lantern',
        descripcion: 'Portador de un anillo de poder que le otorga la capacidad de crear construcciones con su mente.',
        imagen: 'https://www.looper.com/img/gallery/the-history-of-the-green-lantern-corps-explained/intro-1604675887.jpg'
    }
];
