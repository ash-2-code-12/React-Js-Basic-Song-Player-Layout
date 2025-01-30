import {AiOutlineDelete} from 'react-icons/ai'
import {
  SongItemComponent,
  SongImg,
  Details,
  NameGenre,
  Name,
  Genre,
  DurationDelete,
  Duration,
  DeleteBtn,
} from './styledComponents'

const SongItem = ({songItem, onDelete}) => {
  const {id, imageUrl, name, genre, duration} = songItem

  return (
    <SongItemComponent>
      <SongImg src={imageUrl} alt="track" />
      <Details>
        <NameGenre>
          <Name>{name}</Name>
          <Genre>{genre}</Genre>
        </NameGenre>
        <DurationDelete>
          <Duration>{duration}</Duration>
          <DeleteBtn
            data-testid="delete"
            onClick={() => onDelete(id)}
            type="button"
          >
            <AiOutlineDelete size="20" color="#ffffff" />
          </DeleteBtn>
        </DurationDelete>
      </Details>
    </SongItemComponent>
  )
}

export default SongItem
