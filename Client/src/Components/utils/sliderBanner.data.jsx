import shoeImage from '../../assets/Imgs/Shoes.png';
import ps4Image from '../../assets/Imgs/ps4.png';
import mobile from '../../assets/Imgs/mobile.png';
import smartwatch from '../../assets/Imgs/smartwatch.png';

const product1 = { 
    id: '1',
    image: shoeImage,
    rotate: 'rotation1',
    color: 'blue',
};

const product2 = {
    id: '2',
    image: ps4Image,
    rotate: 'rotation2',
    color: '#feac00',
};

const product3 = { 
    id: '3',
    image: mobile,
    rotate: 'rotation3',
    color: '#1ae06d',
};

const product4 = { 
    id: '4',
    image: smartwatch,
    rotate: 'rotation4',
    color: 'red',
};

export const allProducts = [product1, product2, product3, product4]; 
