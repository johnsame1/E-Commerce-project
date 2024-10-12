import { Link } from 'react-router-dom';
import './sectiontwo.css';
import { AiOutlineProduct } from 'react-icons/ai';
function SectionTwo() {
    return (<>
    <div className="sectiontwo">
        <div className="container">
            <h1>Explore millions of offers tailored to your company's needs</h1>
            <div className="buttons">
                <Link className='link' to={'/filteration'} ><AiOutlineProduct style={{color:'#ff820e' ,width:'30px',height:'30px'}}/><br/>shirt</Link>
                <Link className='link' to={'/filteration'} ><AiOutlineProduct style={{color:'#ff820e',width:'30px',height:'30px'}}/><br/>food</Link>
                <Link className='link' to={'/filteration'} ><AiOutlineProduct style={{color:'#ff820e',width:'30px',height:'30px'}}/><br/>pasta</Link>
                <Link className='link' to={'/filteration'} ><AiOutlineProduct style={{color:'#ff820e',width:'30px',height:'30px'}}/><br/>oil</Link>
                <Link className='link' to={'/filteration'} ><AiOutlineProduct style={{color:'#ff820e',width:'30px',height:'30px'}}/><br/>car</Link>
            </div>
        </div>
    </div>

    </>  );
}

export default SectionTwo;