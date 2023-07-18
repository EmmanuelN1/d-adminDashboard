import Charts from "../components/Charts"
import FeaturedInfo from "../components/FeaturedInfo"
import WidgetLg from "../components/WidgetLg"
import WidgetSm from "../components/WidgetSm"
import {userData} from "../dummyData"

function Home() {
  return (
        <div className='home'>
            <FeaturedInfo/>
            <Charts data={userData} title="User Analytics" dataKey="Active Users" grid/>
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div> 
        </div>
  )
}

export default Home