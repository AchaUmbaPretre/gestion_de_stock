import RowChart from '../../components/rowChart/RowChart'
import RowTotal from '../../components/rowTotal/RowTotal'
import RowTotalDetail from '../../components/rowTotalDetail/RowTotalDetail'
import './rightbar.scss'

const Rightbar = () => {
  return (
    <>
      <div className="rightbar">
        <div className="right-wrapper">
          <RowTotal/>
          <RowTotalDetail/>
          <div className="rightRows">
            <div className="rightbar-left">
              <RowChart/>
            </div>
            <div className="rightbar-right">2</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Rightbar