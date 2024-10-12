import './sectionfive.css'
import img1 from '../../../images/creative.png';
import img2 from '../../../images/verified.png';
import img3 from '../../../images/cubes.png';
import img4 from '../../../images/teacher.png';
function SectionFive() {
    return ( <>
    <div className="sectionfive">
        
        <div className="container">
            <div className="containerdata">
                <div className="data">
                    <img src={img1} alt=''/>
                    <h3>Millions of business offers</h3>
                </div>
                <div className="text">
                    <p>Explore products and suppliers for your company from millions of offers around the world</p>
                </div>
                
            </div>
            <div className="containerdata">
                <div className="data">
                    <img src={img2} alt=''/>
                    <h3>Quality protected by guarantee</h3>
                </div>
                <div className="text">
                    <p>Explore products and suppliers for your company from millions of offers around the world</p>
                </div>
                
            </div>
            <div className="containerdata">
                <div className="data">
                    <img src={img3} alt=''/>
                    <h3>One-stop trading solutions</h3>
                </div>
                <div className="text">
                    <p>Explore products and suppliers for your company from millions of offers around the world</p>
                </div>
                
            </div>
            <div className="containerdata">
                <div className="data">
                    <img src={img4} alt=''/>
                    <h3>A trading experience designed just for you</h3>
                </div>
                <div className="text">
                    <p>Explore products and suppliers for your company from millions of offers around the world</p>
                </div>
                
            </div>
        </div>
        </div>
    </> 
    );
}

export default SectionFive;