
import { useNavigate } from "react-router-dom";


const ProductCard = ({ data }) => {

    let navigate = useNavigate();

    const handleCardClick =()=>{
        navigate(`/product/${data.id}`)

    }

    return (
        <div className="max-w-xs mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <img className="h-40 w-full object-cover" src={data.imageUrl} alt={data.name} />
        <div className="px-4 py-2">
          <h1 className="text-gray-900 font-bold text-lg">{data.name}</h1>
          <p className="mt-1 text-gray-600 text-sm">${data.price}</p>
        </div>
        <div className="flex items-center justify-between px-4 py-2 bg-gray-200">
          <button className="text-gray-600 focus:outline-none focus:text-gray-500">
            
            <svg viewBox="0 0 20 20" fill="currentColor" className="heart w-6 h-6">
              
            </svg>
          </button>
          <button className="px-3 py-1 bg-gray-800 text-white text-xs font-bold uppercase rounded" onClick={handleCardClick}>
            Add to cart
          </button>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  