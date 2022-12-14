import React from 'react';
import img1 from '../../assets/projectDisplay/Screenshot 2022-12-14 202814.jpg';
import img2 from '../../assets/projectDisplay/Screenshot 2022-12-14 202841.jpg';
import img3 from '../../assets/projectDisplay/img3.jpg';
import img4 from '../../assets/projectDisplay/img4.jpg';
import img5 from '../../assets/projectDisplay/img5.jpg';
import img6 from '../../assets/projectDisplay/img6.jpg';
import img7 from '../../assets/projectDisplay/img7.jpg';
import img8 from '../../assets/projectDisplay/img8.jpg';



const SeeProjectDetails1 = () => {
    return (
        <div className='p-9 py-16 grid justify-center'>
            <div className='my-4'>
                <div className='text-center my-3'>
                    <h1 className='text-2xl'>Admin will see</h1>
                    <p>● Admin can delete buyers and sellers. <br />
                        ● Admin can see the reported items and verify a seller.</p>
                </div>
                <div className="carousel w-3/4">
                    <div id="item1" className="carousel-item w-full">
                        <img src={img1} className="w-full" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src={img2} className="w-full" />
                    </div>

                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                </div>
            </div>

            <div className='my-4'>
                <div className='text-center my-3'>
                    <h1 className='text-2xl'>Seller will see</h1>
                    <p>● A seller can see his buyers.</p>
                </div>
                <div className="carousel w-3/4">
                    <div id="item3" className="carousel-item w-full">
                        <img src={img3} className="w-full" />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img src={img4} className="w-full" />
                    </div>
                    <div id="item5" className="carousel-item w-full">
                        <img src={img5} className="w-full" />
                    </div>

                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item3" className="btn btn-xs">1</a>
                    <a href="#item4" className="btn btn-xs">2</a>
                    <a href="#item5" className="btn btn-xs">3</a>
                </div>
            </div>
            <div className='my-4'>
                <div className='text-center my-3'>
                    <h1 className='text-2xl'>Buyer will see</h1>
                    <p>● Buyers can buy a product, report a product, contact the seller and see their orders.</p>
                </div>
                <div className="carousel w-3/4">
                    <div id="item6" className="carousel-item w-full">
                        <img src={img6} className="w-full" />
                    </div>
                    <div id="item7" className="carousel-item w-full">
                        <img src={img7} className="w-full" />
                    </div>
                    <div id="item8" className="carousel-item w-full">
                        <img src={img8} className="w-full" />
                    </div>

                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item6" className="btn btn-xs">1</a>
                    <a href="#item7" className="btn btn-xs">2</a>
                    <a href="#item8" className="btn btn-xs">3</a>
                </div>
            </div>
            <div className='flex justify-center gap-3 my-9'>
                <a href="https://katherghor.netlify.app/"><button className="btn btn-sm btn-outline">Live Website</button></a>
                <a href="https://github.com/2ndjoy/b612-used-products-resale-clients-side"><button className="btn btn-sm btn-outline">GitHub Client</button></a>
                <a href="https://github.com/2ndjoy/b612-used-products-resale-server-side"><button className="btn btn-sm btn-outline">GitHub Server</button></a>
            </div>
        </div>
    );
};

export default SeeProjectDetails1;