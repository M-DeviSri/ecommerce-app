"use client"
import { useState, useEffect } from 'react';

function ProductDetails({ params, searchParams }) {
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
            brand: 'poco',
            imgSrcs: [
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/n/m/f/g34-5g-pb1v0002in-motorola-original-imagwu4rayqhgfjh.jpeg?q=70&crop=false',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/6/r/a/g34-5g-pb1v0002in-motorola-original-imagwu4r3qmmu8fe.jpeg?q=70&crop=false',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/c/r/i/g34-5g-pb1v0002in-motorola-original-imagwu4r9mhchvgx.jpeg?q=70&crop=false'
            ]
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
            category: 'mobiles',
            imgSrcs: [
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/n/m/f/g34-5g-pb1v0002in-motorola-original-imagwu4rayqhgfjh.jpeg?q=70&crop=false',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/6/r/a/g34-5g-pb1v0002in-motorola-original-imagwu4r3qmmu8fe.jpeg?q=70&crop=false',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/c/r/i/g34-5g-pb1v0002in-motorola-original-imagwu4r9mhchvgx.jpeg?q=70&crop=false'
            ]
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
            category: 'mobiles',
            imgSrcs: [
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/n/m/f/g34-5g-pb1v0002in-motorola-original-imagwu4rayqhgfjh.jpeg?q=70&crop=false',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/6/r/a/g34-5g-pb1v0002in-motorola-original-imagwu4r3qmmu8fe.jpeg?q=70&crop=false',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/c/r/i/g34-5g-pb1v0002in-motorola-original-imagwu4r9mhchvgx.jpeg?q=70&crop=false'
            ]
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
            category: 'mobiles',
            imgSrcs: [
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/n/m/f/g34-5g-pb1v0002in-motorola-original-imagwu4rayqhgfjh.jpeg?q=70&crop=false',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/6/r/a/g34-5g-pb1v0002in-motorola-original-imagwu4r3qmmu8fe.jpeg?q=70&crop=false',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/c/r/i/g34-5g-pb1v0002in-motorola-original-imagwu4r9mhchvgx.jpeg?q=70&crop=false'
            ]
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
            category: 'mobiles',
            imgSrcs: [
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/n/m/f/g34-5g-pb1v0002in-motorola-original-imagwu4rayqhgfjh.jpeg?q=70&crop=false',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/6/r/a/g34-5g-pb1v0002in-motorola-original-imagwu4r3qmmu8fe.jpeg?q=70&crop=false',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/c/r/i/g34-5g-pb1v0002in-motorola-original-imagwu4r9mhchvgx.jpeg?q=70&crop=false'
            ]
        }
    ];
    const productId = params.id;
    const filteredProduct = products.find(product => product.id == productId);
    // let selectedImgSrc = filteredProduct.imgSrcs[0];
    const [selectedImgSrc, setSelectedImgSrc] = useState(filteredProduct.imgSrcs[0]);
    const onImageChange = (imgSrc) => {
        console.log(imgSrc);
        // selectedImgSrc = imgSrc;
        setSelectedImgSrc(imgSrc);
    }

    useEffect(() => {
        console.log('In use effect function...');
    }, [selectedImgSrc]);

    return (
        <div className="flex m-5 p-5">
            <div className="w-full md:w-3/12 mx-auto">
                <div className="flex">
                    <div className="md:w-3/12">
                        {filteredProduct?.imgSrcs?.map(imgSrc => (
                            <div className="border-2 p-2 m-4">
                                <img src={imgSrc} key={imgSrc} className="cursor-pointer" width="90px" style={{height: '90px'}} onClick={() => onImageChange(imgSrc)}/>
                            </div>
                        ))}
                    </div>
                    <div className="md:w-9/12">
                        <div className="border-2 inline-block">
                            <img src={selectedImgSrc} className="m-auto p-3" width="220px" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-6/12">
                <h2 className="text-xl mb-4">{filteredProduct.name}</h2>
                <ul className="list-disc">
                    {filteredProduct.specifications.map(specification => (
                        <li key={specification}>{specification}</li>
                    ))}
                </ul>
            </div>
            <div className="w-full md:w-3/12">
                <h3 className="text-2xl">Rs. {filteredProduct.price}/-</h3> <br/> <br/>
                <button class="relative h-12 w-40 overflow-hidden border border-indigo-600 text-indigo-600 shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-indigo-600 before:duration-300 before:ease-out hover:text-white hover:shadow-indigo-600 hover:before:h-40 hover:before:w-40 hover:before:opacity-80 rounded-md">
                    <span class="relative z-10">Add to Cart</span>
                </button>
            </div>
        </div>
    )
}

export default ProductDetails;