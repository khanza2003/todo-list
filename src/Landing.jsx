import React from 'react';
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    
    <div>
        <h1 style={{marginTop:'50px',fontSize:'45px',color:'white',display:'flex',alignItems:'center',marginLeft:'300px'}}><img style={{width:'100px'}} src="/images/bg3.png" alt="" />Seamlessly Plan, Achieve, Repeat</h1>
        <div style={{display:'flex',justifyContent:'space-between',marginTop:'80px'}}>
          <div style={{marginTop:'60px'}}>
           
            <p style={{fontSize:'25px',color:'white',marginLeft:'30px',lineHeight:'35px'}}><span style={{marginLeft:'100px'}}>Transform your task management</span> into an effortless journey. Our app is designed to help you seamlessly organize your day, stay on top of your goals, and make consistent progress. From setting priorities to tracking your achievements, each step is crafted to keep you focused and motivated. Whether it’s for work, school, or personal projects, let every task bring you closer to success. Plan with purpose, achieve with ease, and repeat for a life of accomplishment.</p>
            <Link  to='/home'  style={{ marginLeft: '400px', marginBottom: '20px', background: 'rgb(254, 164, 179)', padding: '10px 20px', borderRadius: '10px', color: 'rgb(95, 95, 223)', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',  transition: 'transform 0.1s ease',            }} onMouseDown={(e) => e.target.style.transform = 'translateY(2px)'} onMouseUp={(e) => e.target.style.transform = 'translateY(0)'}> Get Started</Link>

            </div>
          <div><img style={{height:'460px'}} src="/images/bg1.png" alt="Background" /></div>
        </div>
    </div>
  );
};

export default Landing;