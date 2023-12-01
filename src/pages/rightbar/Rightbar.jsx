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
        </div>
      </div>
    </>
  )
}

export default Rightbar