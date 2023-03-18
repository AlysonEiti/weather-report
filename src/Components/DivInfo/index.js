import './DivInfo.css';
import DivContent from '../DivContent';
import Image from '../Image';

const DivInfo = (props) => {
    return (
        <div className='info'>
            <div className='temp'>
                <DivContent key="1" class="subTitle" content="Temperature" />
                <DivContent key="2" class="subInfo"  content={["-- ", <sup>ºC</sup>]} />
                <Image src="http://openweathermap.org/img/wn/10d@2x.png" />
            </div>
            <div className='wind'>
                <DivContent key="3" class="subTitle" content="Wind" />
                <DivContent key="4" class="subInfo"  content={["-- ", <span>km/h</span>]} />
                <div className='windArea'>
                    <div className="windPont" content="" style={{transform: 'rotate(0deg)'}} />
                </div>
            </div>
        </div>
    )
};

export default DivInfo;