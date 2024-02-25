import ArchiesCrunchyMocha from '@/app/images/archies_crunchy_mocha.png';
import ArchiesFrappuccino from '@/app//images/archies_frappuccino.png';
import ArchiesIcedMocha from '@/app/images/archies_iced_mocha.png';
import BettysChestnutLatte from '@/app/images/bettys_chestnut_latte.png';
import BettysIcedLatte from '@/app/images/bettys_iced_latte.png';
import JugheadGingerbreadFrappuccino from '@/app/images/jughead_gingerbread_frappuccino.png';
import JugheadGingerbreadLatte from '@/app/images/jughead_gingerbread_latte.png';
import JugheadIcedLatte from '@/app/images/jughead_iced_latte.png';
import VeronicasCremeFrappuccino from '@/app/images/veronicas_creme_frappuccino.png';
import VeronicasIcedLatte from '@/app/images/veronicas_iced_latte.png';
import VeronicasToffeeLatte from '@/app/images/veronicas_toffee_latte.png';

export function getShort(desc){
    return desc.slice(0,100);
}

const offercards = [
    {
        title: "Jughead's Iced Gingerbread Latte",
        src: JugheadIcedLatte,
        cals: '259 Kcal',
        description: 'TALL(Iced Tall Gingerbread Latte) .259 Kcal',
        desc: "Get your festive cheer on with our Iced Gingerbread Latte. Sweet and delicately spicy gingerbread flavors mingle with our signature espresso and velvety milk, topped with gingerbread whipped cream sprinkled with a spice blend that tastes just like the holidays. Served over ice.",
        price: '456.75',
    },{
        title: "Betty's Chestnut Mont Blanc Latte",
        src: BettysChestnutLatte,
        cals: '233 Kcal',
        description: 'SHORT(Short Chestnut Mont Blanc Latte) .233 Kcal',
        desc: "Inspired by the french dessert of the same name, our Chestnut Mont Blanc Latte showcases the harmony between the earthy and nutty notes of chestnut, steamed milk, and our signature espresso. Topped with a luscious chestnut whipped cream and chestnut sauce drizzled over it.",
        price: '414.75',
    },{
        title: "Veronica's Toffee Nut Crunch Latte",
        src: VeronicasToffeeLatte,
        cals: '225 Kcal',
        description: 'SHORT(Short Toffee Nut Crunch Latte) .225 Kcal',
        desc: "Delight your senses with our Toffee Nut Crunch Latte. A perfect combination of steamed milk, our signature espresso, heartwarming flavors of buttery toffee and the warmth of toasted nuts. Topped with toffee nut whipped cream and graham crackers.",
        price: '414.75',
    },{
        title: "Betty's Iced Chestnut Mont Blanc Latte",
        src: BettysIcedLatte,
        cals: '312 Kcal',
        description: 'TALL(Iced Tall Chestnut Mont Blanc Latte) .312 Kcal',
        desc: "Inspired by the french dessert of the same name, our Iced Chestnut Mont Blanc Latte showcases the harmony between the earthy and nutty notes of chestnut, velvety milk, and our signature espresso. Topped with a luscious chestnut whipped cream and chestnut sauce drizzled over it. Served over ice.",
        price: '456.75',
    },{
        title: "Archie's Crunchy Red Hat Mocha",
        src: ArchiesCrunchyMocha,
        cals: '415 Kcal',
        description: 'Shot(Short Crunchy Red Hat Mocha) .415 Kcal',
        desc: "Almost too cute to drink, our Crunchy Red Hat Mocha Latte combines steamed milk, our signature espresso, decadent mocha, a generous amout of vanilla whipped cream topped with a chocolate whipped cream hat and strawberry drizzle, finished with crunchy graham crackers. This beverage is not just a delight for your eyes but also a party in your mouth.",
        price: '414.75',
    },{
        title: "Archie's Iced Crunchy Red Hat Mocha",
        src: ArchiesIcedMocha,
        cals: '396 Kcal',
        description: 'Shot(Short Crunchy Red Hat Mocha) .415 Kcal',
        desc: "Almost too cute to drink, our Iced Crunchy Red Hat Mocha Latte combines velvety milk, our signature Espresso, decadent mocha, a generous amout of vanilla whipped cream topped with a chocolate whipped cream hat and strawberry drizzle, finished with crunchy graham crackers. This beverage is not just a delight for your eyes but also a party in your mouth. Served over ice.",
        price: '456.75',
    },{
        title: "Veronica's Iced Toffee Nut Crunch Latte",
        src: VeronicasIcedLatte,
        cals: '280 Kcal',
        description: 'TALL(Iced Tall Toffeenut Crunch Latte) .280 Kcal',
        desc: "Delight your senses with our Iced Toffee Nut Crunch Latte. A perfect combination of velvety milk, our signature espresso, heartwarming flavors of buttery toffee and the warmth of toasted nuts. Topped with toffee nut whipped cream and graham crackers. Served over ice",
        price: '456.75',
    },{
        title: "Jughead's Gingerbread Latte",
        src: JugheadGingerbreadLatte,
        cals: '204 Kcal',
        description: 'SHORT(Short Gingerbread Latte) .204 Kcal',
        desc: "Get your festive cheer on with our Gingerbread Latte. Sweet and delicately spicy gingerbread flavors mingle with our signature espresso and steamed milk, topped with gingerbread whipped cream sprinkled with a spice blend that tastes just like the holidays.",
        price: '414.75',
    },{
        title: "Veronica's Toffee Nut Crunch Crème Frappuccino",
        src: VeronicasCremeFrappuccino,
        cals: '372 Kcal',
        description: 'TALL(Tall toffee nut crunch cream frappuccino) .372 Kcal',
        desc: "Delight your senses with our Toffee Nut Crème Frappuccino. A perfect blend of milk, heartwarming flavors of buttery toffee and the warmth of toasted nuts. Topped with toffee nut whipped cream and graham crackers. A coffee free offering.",
        price: '483.00',
    },{
        title: "Jughead's Gingerbread Frappuccino",
        src: JugheadGingerbreadFrappuccino,
        cals: '337 Kcal',
        description: 'TALL(Tall Gingerbread Frappuccino) .337 Kcal',
        desc: "Get your festive cheer on with our Gingerbread Frappuccino. Sweet and delicately spicy gingerbread flavors blended with milk, and smooth coffee, topped with gingerbread whipped cream sprinkled with a spice blend that tastes just like the holidays.",
        price: '483.00',
    },{
        title: "Archie's Crunchy Red Hat Mocha Frappuccino",
        src: ArchiesFrappuccino,
        cals: '552 Kcal',
        description: 'TALL(Tall Crunchy Red Hat Mocha Frappuccino) .552 Kcal',
        desc: "Almost too cute to drink, our Crunchy Red Hat Mocha Frappuccino is a perfect blend of milk, smooth coffee, decadent mocha, a generous amout of vanilla whipped cream topped with a chocolate whipped cream hat and strawberry drizzle, finished with crunchy graham crackers. This beverage is not just a delight for your eyes but also a party in your mouth.",
        price: '483.00',
    },
];

export default offercards;