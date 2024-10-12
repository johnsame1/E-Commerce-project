import img1 from '../../../images/unsplash_v8XaVfyo41Q.f3e57dd7d7497b936f0c.png';
import img2 from '../../../images/image 1.86da83f890d792e2a4ae.png';
import './sectionthree.css';
function SectionThree() {
    return ( <>
    <div className="sectionthree">
        <div className="container">
            <div className="data">
                <h1>Enhanse Your Game Experience</h1>
                <p>Best Experience With Most <br/> famous games you can find now !</p>
                <button>Explore Now</button>
            </div>
            <div className="images">
                <div className="img1"><img src={img1} alt=''/></div>
                <div className="img2"><img src={img2} alt=''/></div>
            </div>
        </div>
            
    </div>
    </> );
}

export default SectionThree;