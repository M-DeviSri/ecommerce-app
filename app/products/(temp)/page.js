"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Products() {
    const products = [
        {
            id: 1,
            name: 'POCO F6 5G (Black, 256 GB)',
            price: 31999,
            specifications: [
                '12 GB RAM | 256 GB ROM',
                '16.94 cm (6.67 inch) Display',
                '50MP (OIS) + 8MP | 20MP Front Camera',
                '5000 mAh Battery',
                '8s Gen3 Processor'
            ],
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/s/r/e/-original-imahf39qxccmgkhc.jpeg?q=70',
            category: 'mobiles',
            brand: 'poco'
        },
        {
            id: 2,
            name: 'Motorola G34 5G (Ocean Green, 128 GB)',
            price: 11999,
            specifications: [
                '12 GB RAM | 256 GB ROM',
                '16.94 cm (6.67 inch) Display',
                '50MP (OIS) + 8MP | 20MP Front Camera',
                '5000 mAh Battery',
                '8s Gen3 Processor'
            ],
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/s/r/e/-original-imahf39qxccmgkhc.jpeg?q=70',
            category: 'mobiles'
        },
        {
            id: 3,
            name: 'OnePlus Nord CE 3 Lite 5G (Chromatic Gray, 256 GB)',
            price: 18633,
            specifications: [
                '12 GB RAM | 256 GB ROM',
                '16.94 cm (6.67 inch) Display',
                '50MP (OIS) + 8MP | 20MP Front Camera',
                '5000 mAh Battery',
                '8s Gen3 Processor'
            ],
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/w/z/u/-original-imagtxvtmxpagdpn.jpeg?q=70',
            category: 'mobiles'
        },
        {
            id: 4,
            name: 'POCO C65 (Pastel Blue, 128 GB)',
            price: 7499,
            specifications: [
                '12 GB RAM | 256 GB ROM',
                '16.94 cm (6.67 inch) Display',
                '50MP (OIS) + 8MP | 20MP Front Camera',
                '5000 mAh Battery',
                '8s Gen3 Processor'
            ],
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/u/8/c65-mzb0g8nin-poco-original-imagw6j2kp5t5jek.jpeg?q=70',
            category: 'mobiles'
        },
        {
            id: 5,
            name: 'realme C65 5G (Feather Green, 64 GB)',
            price: 10499,
            specifications: [
                '12 GB RAM | 256 GB ROM',
                '16.94 cm (6.67 inch) Display',
                '50MP (OIS) + 8MP | 20MP Front Camera',
                '5000 mAh Battery',
                '8s Gen3 Processor'
            ],
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/4/8/i/-original-imahy99nvkpewtzy.jpeg?q=70',
            category: 'mobiles'
        }
    ];
    const [filteredProducts, setFilteredProducts] = useState(products);
    const onChangeSearchProduct = (searchStr) => {
        console.log(searchStr);
        const temp = products.filter(product => product.name.includes(searchStr));
        setFilteredProducts(temp);
    }
    return (
        <div className="flex justify-between p-4">
            <div className="w-3/12">
                <h1>Filters</h1>
            </div>
            <div className="w-9/12">
                <div className='container'>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Search product" onChange={(event) => onChangeSearchProduct(event.target.value)}/>
                </div>
                {filteredProducts.map((product, index) => (
                    <div className="container margin-auto my-4 border-b-2 py-4">
                        <div className="flex">
                            <div className="w-full md:w-3/12">
                                <img src={product.imgSrc} width="170px" />
                            </div>
                            <div className="w-full md:w-6/12">
                                <h2 className="text-xl mb-4"><Link href={`/products/product-details/${product.id}`}><b>{product.name}</b></Link></h2>
                                <ul className="list-disc">
                                    {product.specifications.map(specification => (
                                        <li>{specification}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="w-full md:w-3/12">
                                <h3 className="text-2xl">Rs. {product.price}/-</h3> <br/> <br/>
                                <button class="relative h-12 w-40 overflow-hidden border border-indigo-600 text-indigo-600 shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-indigo-600 before:duration-300 before:ease-out hover:text-white hover:shadow-indigo-600 hover:before:h-40 hover:before:w-40 hover:before:opacity-80 rounded-md">
                                    <span class="relative z-10">Add to Cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}