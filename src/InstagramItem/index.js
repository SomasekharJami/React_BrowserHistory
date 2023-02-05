import './index.css'

const InstagramItem = props => {
  const {itemDetails, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = itemDetails
  const onDeleting = () => {
    onDelete(id)
  }

  return (
    <li className="listItem">
      <p className="timeP">{timeAccessed}</p>
      <div className="detailCon">
        <div className="hisCon">
          <img className="hisImg" src={logoUrl} alt="domain logo" />
          <div className="textCon">
            <p className="hisH">{title}</p>
            <p className="hisP">{domainUrl}</p>
          </div>
        </div>
        <button
          data-testid="delete"
          type="button"
          className="bton"
          onClick={onDeleting}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delIcon"
          />
        </button>
      </div>
    </li>
  )
}

export default InstagramItem
