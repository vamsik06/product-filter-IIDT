import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products} from './data';


const NavItems = () => {
    const [data, setData] = useState(products);
    const [search, setSearch] = useState()
    const handleSearch = ()=>{
        const filterd = data.filter(res=>res.title.toLowerCase().includes(search.toLowerCase()));
        setData(filterd)
    }
    return (
        <div>
            <aside className='list-none box-border w-[220px] border-2 mt-6 p-4 h-[300px]'>
            <div>
            <div>
                <input className='border-2 border-black w-32' type="text" value={search} onChange={(e)=>{
                    setSearch(e.target.value)
                }} />
                <button onClick={handleSearch}>Search</button>
            </div>
          <li className='my-5 mx-5 font-medium'><Link to={'/'}>All</Link></li>
          <li className='my-5 mx-5 font-medium'><Link to={'/Ikea'}>Ikea</Link></li>
          <li className='my-5 mx-5 font-medium'><Link to={'/Marcos'}>Marcos</Link></li>
          <li className='my-5 mx-5 font-medium'><Link to={'/Caressa'}>Caressa</Link></li>
          <li className='my-5 mx-5 font-medium'><Link to={'/Liddy'}>Liddy</Link></li>
            </div>
            </aside>
        </div>
    );
};

export default NavItems;