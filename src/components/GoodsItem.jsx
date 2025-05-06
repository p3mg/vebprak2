
// export function GoodsItem({
//   mainId,
//   displayName,
//   displayDescription,
//   price,
//   displayAssets,
//   addToBasket,
// })  {
//   const backgroundImage = displayAssets.length
//   ? displayAssets[0].full_background
//   : displayName;

//   return(
//     <div className="card white">
//       <div className="card-image">
//         <img src={backgroundImage} alt={displayName}/>
//       </div>
//       <div className="card-content">
//         <span className="card-title">{displayName}</span>
//         <p className="font1">{displayDescription}</p>
//       </div>
//       <div className="card-action grey darken-4">
//         <div>
//           <button 
//           className="btn red darken-2"
//           onClick={() =>
//             addToBasket({
//               mainId,
//               displayName,
//               price,
//             })
//           }
//           >
//             Купить
//           </button>
//         </div>
//         <div>
//           <span className="right">{price.finalPrice} V</span>
//         </div>
//       </div>
//     </div>
//   );
// }
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function GoodsItem({
  mainId,
  displayName,
  displayDescription,
  price,
  displayAssets,
  addToBasket,
}) {
  const backgroundImage = displayAssets.length
    ? displayAssets[0].full_background
    : displayName;

  const handleAddToBasket = () => {
    addToBasket({
      mainId,
      displayName,
      price,
    });
    toast.success(`${displayName} добавлен в корзину!`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return(
    <div className="card white">
      <div className="card-image">
        <img src={backgroundImage} alt={displayName}/>
      </div>
      <div className="card-content">
        <span className="card-title">{displayName}</span>
        <p className="font1">{displayDescription}</p>
      </div>
      <div className="card-action grey darken-4">
        <div>
          <button 
            className="btn red darken-2"
            onClick={handleAddToBasket}
          >
            Купить
          </button>
        </div>
        <div>
          <span className="right">{price.finalPrice} V</span>
        </div>
      </div>
    </div>
  );
}