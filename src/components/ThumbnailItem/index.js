// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isSelected, getSelectedImage} = props
  const {thumbnailUrl, thumbnailAltText} = imageDetails

  const unSelectedImageClassName = isSelected ? '' : 'unselected'

  const onClickImage = () => getSelectedImage(imageDetails)

  return (
    <li>
      <button type="button" className="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`image ${unSelectedImageClassName}`}
          onClick={onClickImage}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
