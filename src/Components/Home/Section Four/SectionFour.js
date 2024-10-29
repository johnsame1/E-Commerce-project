
import "./sectionfour.css";
import Best from "./Best";


function SectionFour() {
  // const api_url = "https://fakestoreapi.com/products";
  // const [products, setProducts] = useState([]);

  // const getProducts = () => {
  //   fetch(api_url)
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data))
  //     .catch((err) => console.log(err));
  // };
  // useEffect(() => {
  //   getProducts();
  // }, []);
  return (
    <>
      <div className="sectionfour">
        <Best title={"BestSaellerr"} filter={"bestSeller"}/>
      </div>
      <div className="sectionfour">
      <Best title={"onSlaes"} filter={"onSales"}/>
      </div>
      <div className="sectionfour">
      <Best title={"new Arrived"} filter={"new"}/>
      </div>
    </>
  );
}

export default SectionFour;
