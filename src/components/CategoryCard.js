

const CategoryCard = ({data}) => {
    return (

        <div className="flex  items-center justify-between bg-blue-900 rounded-lg shadow pl-4 cursor-pointer hover:bg-gray-400 transition duration-300">
         <span className="text-3xl pr-6 font-semibold text-white">{data.title}</span>
        <img src={data.img} alt={data.title} className="w-32 h-32 object-cover rounded-md " />
       
      </div>
    );
  };
  
  export default CategoryCard;
  