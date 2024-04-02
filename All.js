import { products} from './data';
import ProductsMenu from './ProductsMenu';

const All = () => {
   return (
        <div>
            <div className='flex flex-wrap list-none'>
                { products?.map((item, index) => (
                    <li key={index}><ProductsMenu resData={item}/></li>
                ))}
            </div>
        </div>
    );
};

export default All;