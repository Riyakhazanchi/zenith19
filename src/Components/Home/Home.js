import React from 'react';
import 'tachyons';
import './Home.css';
import Pc from '../assets2/pc.png';
import Zenith from '../assets2/zenithlogo.png';





const Home = () =>{
	return(
		<div className="home2">
		   <div className="logo  w-100  h-100-ns  b--white ma2">
		            <svg className="nineteen" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="154" height="127" viewBox="0 0 154 127">
					    <defs>
					        <text id="b" fill="#F5A623" font-family="Overpass-Bold, Overpass" font-size="140" font-weight="bold">
					            <tspan x="1086" y="300">19</tspan>
					        </text>
					        <filter id="a" width="128.9%" height="123.2%" x="-14.4%" y="-10.5%" filterUnits="objectBoundingBox">
					            <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/>
					            <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="6.5"/>
					            <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0.961710989 0 0 0 0 0.65036732 0 0 0 0 0.138542295 0 0 0 1 0"/>
					        </filter>
					    </defs>
					    <g fill="#F5A623" fill-rule="evenodd" transform="translate(-1077 -189)">
					        <use filter="url(#a)" href="#b"/>
					        <use href="#b"/>
					    </g>
					</svg>
		        <img alt='zenith-logo' className="zenith w-40-ns w-100" src={Zenith}/>
		        <p className="Where-innovation-mee w-100-ns   b--white">
		        	Where innovation meets implementation.
		        </p>
		        <p className="th-April   b--white center">
		            7-8th April
		        </p>


		   </div>

		   <img  alt='background' className="pc  o-80 b--white  w-80-ns w-100 ma2 " src={Pc}/>

		</div>

		);
}


export default Home;