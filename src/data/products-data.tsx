export interface product {
    id: string;
    imageUrl: string;
    alt: string;
    name: string;
    description: string;
    price: number;
}

export const productData: product[] = [
    {
        id: '1',
        imageUrl: 'https://media.istockphoto.com/id/1453988945/photo/yellow-bucket-hat-isolated-on-white.jpg?s=2048x2048&w=is&k=20&c=_BoTd_osIK14y-x-qz2mNXtX2c8_FHR0s_yPdculwcY=',
        alt: 'Yellow bucket hat isolated on a white background',
        name: 'Hat',
        description: 'A stylish wide-brimmed hat for sunny days.',
        price: 29,
    },
    {
        id: '2',
        imageUrl: 'https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'A plain white t-shirt on a hanger',
        name: 'T-Shirt',
        description: 'A comfortable cotton t-shirt for casual wear.',
        price: 19,
    },
    {
        id: '3',
        imageUrl: 'https://media.istockphoto.com/id/1326352310/photo/blank-tracksuit-top-mockup.webp?s=2048x2048&w=is&k=20&c=LZwxSB4QdobTkXnISEmxl1-UhLXY101CTE8oX4cOS3I=',
        alt: 'A blank tracksuit top mockup',
        name: 'Jacket',
        description: 'A warm and cozy winter jacket.',
        price: 89,
    },
    {
        id: '4',
        imageUrl: 'https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'A pair of running shoes on a white background',
        name: 'Running Shoes',
        description: 'Lightweight running shoes with superior grip.',
        price: 69,
    },
    {
        id: '5',
        imageUrl: 'https://images.pexels.com/photos/603022/pexels-photo-603022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'Classic blue jeans folded on a table',
        name: 'Jeans',
        description: 'Classic blue jeans with a relaxed fit.',
        price: 49,
    },
    {
        id: '6',
        imageUrl: 'https://images.pexels.com/photos/6371788/pexels-photo-6371788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'A brown leather belt with a silver buckle',
        name: 'Leather Belt',
        description: 'A durable leather belt with a sleek buckle.',
        price: 25,
    },
    {
        id: '7',
        imageUrl: 'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'A pair of black sunglasses on a white surface',
        name: 'Sunglasses',
        description: 'Polarized sunglasses with UV protection.',
        price: 35,
    },
    {
        id: '8',
        imageUrl: 'https://images.pexels.com/photos/3731256/pexels-photo-3731256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'A black backpack on a wooden table',
        name: 'Backpack',
        description: 'A spacious backpack for everyday use.',
        price: 45,
    },
    {
        id: '9',
        imageUrl: 'https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'A wristwatch with a brown leather strap',
        name: 'Wrist Watch',
        description: 'A stylish wristwatch with a leather strap.',
        price: 99,
    },
    {
        id: '10',
        imageUrl: 'https://images.pexels.com/photos/1056862/pexels-photo-1056862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'A knitted scarf in a neutral color',
        name: 'Scarf',
        description: 'A soft wool scarf to keep you warm.',
        price: 20,
    }
];
