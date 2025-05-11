import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { Shop } from "./layout/Shop";

// function App() {
//   return (
//   <>
//   <Header></Header>
//   <Footer></Footer>
//   <Shop></Shop>
//   </>
//   );
  
// }
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Footer></Footer>
      <Shop></Shop>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}


export default App
