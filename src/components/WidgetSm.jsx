import user from "../assets/user.JPG"
import { Visibility } from "@material-ui/icons"
function WidgetSm() {
 
  return (
    <div className="widgetSm">
        <span className="widgetSmTitle">
            Add New Members
        </span>
        <ul className="widgetSmList">

          <li className="widgetSmListItem">
              <img src={user} alt="" className="widgetSmImg"/>

              <div className="widgetSmUser">
                  <span className="widgetSmUsername">Winnie Joseph</span>
                  <span className="widgetSmUserTitle">Software Engineer</span>
              </div>

              <button className="widgetSmButton">
                  <Visibility className="widgetSmIcon"/>
                  Display
              </button>
              
          </li>

          <li className="widgetSmListItem">
              <img src={user} alt="" className="widgetSmImg"/>

              <div className="widgetSmUser">
                  <span className="widgetSmUsername">Winnie Joseph</span>
                  <span className="widgetSmUserTitle">Software Engineer</span>
              </div>

              <button className="widgetSmButton">
                  <Visibility className="widgetSmIcon"/>
                  Display
              </button>
              
          </li>

          <li className="widgetSmListItem">
              <img src={user} alt="" className="widgetSmImg"/>

              <div className="widgetSmUser">
                  <span className="widgetSmUsername">Winnie Joseph</span>
                  <span className="widgetSmUserTitle">Software Engineer</span>
              </div>

              <button className="widgetSmButton">
                  <Visibility className="widgetSmIcon"/>
                  Display
              </button>
              
          </li>

          <li className="widgetSmListItem">
              <img src={user} alt="" className="widgetSmImg"/>

              <div className="widgetSmUser">
                  <span className="widgetSmUsername">Winnie Joseph</span>
                  <span className="widgetSmUserTitle">Software Engineer</span>
              </div>

              <button className="widgetSmButton">
                  <Visibility className="widgetSmIcon"/>
                  Display
              </button>
              
          </li>

          <li className="widgetSmListItem">
              <img src={user} alt="" className="widgetSmImg"/>

              <div className="widgetSmUser">
                  <span className="widgetSmUsername">Winnie Joseph</span>
                  <span className="widgetSmUserTitle">Software Engineer</span>
              </div>

              <button className="widgetSmButton">
                  <Visibility className="widgetSmIcon"/>
                  Display
              </button>
              
          </li>


        </ul>

    </div>
  )
}

export default WidgetSm