import userImg from '../assets/admin.JPG'

const Button = ({type}) => {
    return <button className= {"widgetLgButton " + type}> {type} </button>
}

function WidgetLg() {
  return (
    <div className="widgetLg">
       <h3 className="widgetLgTitle">
          Latest Transactions
      </h3>
      <table className="widgetLgTable">
          <tr className="widgetLgTableTr">
              <th className="widgetLgTh">Customer</th>
              <th className="widgetLgTh">Date</th>
              <th className="widgetLgTh">Amount</th>
              <th className="widgetLgTh">Status</th>
          </tr>

          <tr className="widgetLgTableTr">
              <td className="widgetLgUserdetails"> 
                  <img src={userImg} alt="" className="widgetLgImg" />
                  <span className="widgetLgTrName">Igbokwe James</span>
              </td>
              <td className="widgetLgDate"> 2 Sept 2022 </td>
              <td className="widgetLgAmount"> $300.45 </td>
              <td className="widgetLgStatus"> <Button type="Approved"/> </td>
          </tr>

          <tr className="widgetLgTableTr">
              <td className="widgetLgUserdetails"> 
                  <img src={userImg} alt="" className="widgetLgImg" />
                  <span className="widgetLgTrName">Igbokwe James</span>
              </td>
              <td className="widgetLgDate"> 2 Sept 2022 </td>
              <td className="widgetLgAmount"> $300.45 </td>
              <td className="widgetLgStatus"> <Button type="Declined"/> </td>
          </tr>

          <tr className="widgetLgTableTr">
              <td className="widgetLgUserdetails"> 
                  <img src={userImg} alt="" className="widgetLgImg" />
                  <span className="widgetLgTrName">Igbokwe James</span>
              </td>
              <td className="widgetLgDate"> 2 Sept 2022 </td>
              <td className="widgetLgAmount"> $300.45 </td>
              <td className="widgetLgStatus"> <Button type="Approved"/> </td>
          </tr>

          <tr className="widgetLgTableTr">
              <td className="widgetLgUserdetails"> 
                  <img src={userImg} alt="" className="widgetLgImg" />
                  <span className="widgetLgTrName">Igbokwe James</span>
              </td>
              <td className="widgetLgDate"> 2 Sept 2022 </td>
              <td className="widgetLgAmount"> $300.45 </td>
              <td className="widgetLgStatus"> <Button type="Declined"/> </td>
          </tr>

          <tr className="widgetLgTableTr">
              <td className="widgetLgUserdetails"> 
                  <img src={userImg} alt="" className="widgetLgImg" />
                  <span className="widgetLgTrName">Igbokwe James</span>
              </td>
              <td className="widgetLgDate"> 2 Sept 2022 </td>
              <td className="widgetLgAmount"> $300.45 </td>
              <td className="widgetLgStatus"> <Button type="Approved"/> </td>
          </tr>

          <tr className="widgetLgTableTr">
              <td className="widgetLgUserdetails"> 
                  <img src={userImg} alt="" className="widgetLgImg" />
                  <span className="widgetLgTrName">Igbokwe James</span>
              </td>
              <td className="widgetLgDate"> 2 Sept 2022 </td>
              <td className="widgetLgAmount"> $300.45 </td>
              <td className="widgetLgStatus"> <Button type="Pending"/> </td>
          </tr>

          <tr className="widgetLgTableTr">
              <td className="widgetLgUserdetails"> 
                  <img src={userImg} alt="" className="widgetLgImg" />
                  <span className="widgetLgTrName">Igbokwe James</span>
              </td>
              <td className="widgetLgDate"> 2 Sept 2022 </td>
              <td className="widgetLgAmount"> $300.45 </td>
              <td className="widgetLgStatus"> <Button type="Declined"/> </td>
          </tr>
      </table>
    </div>
  )
}

export default WidgetLg