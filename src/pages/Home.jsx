import React,{Component} from 'react';

import Gheader from '../components/Gheader.jsx'
import Gbanner from '../components/Gbanner.jsx'
import Gselfservice from '../components/Gselfservice.jsx'
import Gnav from '../components/Gnav.jsx'
import Gchangping from '../components/Gchangping.jsx'
import Gnews from '../components/Gnews.jsx'
import Gmine from '../components/Gmine.jsx'
import Gfooter from '../components/Gfooter.jsx'
const Home = class Home extends Component{
    render(){
        return(
            <div>
                <Gheader />
                <Gbanner />
                <Gselfservice />
                <Gnav />
                <Gchangping />
                <Gnews />
                <Gmine />
                <Gfooter />
            </div>
        )
    }
}
export default Home;