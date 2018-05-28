//Kinto website
import React from 'react'
import globals from './env/en'

// Static
import Root from './layout/Root';
import Main from './layout/Main';
import HomeHeader from './layout/HomeHeader';
import HomeContent from './layout/HomeContent';
import HomeFooter from './layout/HomeFooter';

// Toolkit UI
import { Row, BackTop, Carousel } from 'antd';

// Styles
import 'antd/dist/antd.css';
import './theme/globalStyles';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Root>
                <div>
                    <Row>
                        <Main>
                            <HomeHeader/>
                            <Carousel autoplay dots={false}>
                                {globals.slides.map((slide, i) => {
                                    return (
                                        <img alt={slide} src={`http://www.casadeuco.com/images/slides/${slide}`} key={`header-image-${i}`}/>
                                    )
                                })}
                            </Carousel>
                            <HomeContent/>
                        </Main>
                    </Row>
                </div>
                <HomeFooter/>
                <div>
                    <BackTop />
                </div>
            </Root>
        )
    }

}

export default App;

