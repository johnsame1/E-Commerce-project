import { Link } from 'react-router-dom';
import './sectiontwo.css';
import { AiOutlineProduct } from 'react-icons/ai';
function SectionTwo() {
    return (<>
    <div className="sectiontwo">
        <div className="container">
            <h1>Explore millions of offers tailored to your company's needs</h1>
            <div className="buttons">
                <Link  to={'/filteration'} ><button><AiOutlineProduct style={{color:'#ff820e' ,width:'30px',height:'30px'}}/><br/>shirt</button></Link>
                <Link  to={'/filteration'} ><button><AiOutlineProduct style={{color:'#ff820e',width:'30px',height:'30px'}}/><br/>food</button></Link>
                <Link  to={'/filteration'} ><button><AiOutlineProduct style={{color:'#ff820e',width:'30px',height:'30px'}}/><br/>pasta</button></Link>
                <Link  to={'/filteration'} ><button><AiOutlineProduct style={{color:'#ff820e',width:'30px',height:'30px'}}/><br/>oil</button></Link>
                <Link  to={'/filteration'} ><button><AiOutlineProduct style={{color:'#ff820e',width:'30px',height:'30px'}}/><br/>car</button></Link>
            </div>
        </div>
    </div>

    </>  );
}

export default SectionTwo;