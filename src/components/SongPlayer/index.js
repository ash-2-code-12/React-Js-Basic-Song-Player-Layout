import {Component} from 'react'
import {IoIosSearch} from 'react-icons/io'

import SongItem from '../SongItem'

import {
  SongPlayerComponent,
  Banner,
  BHead,
  BSubHead,
  SongsSection,
  SongsList,
  SongsHead,
  NoSongs,
  NoSongsText,
  HeadSearch,
  SearchBox,
  Search,
  SearchBtn,
} from './styledComponents'

class SongPlayer extends Component {
  state = {
    tracksList: [],
    searchInput: '',
  }

  componentDidMount() {
    const {tracksList} = this.props
    this.setState({tracksList})
  }

  onSearchChange = event => {
    this.setState({searchInput: event.target.value})
  }

  onSearchEnter = event => {
    if (event.key === 'Enter') this.onSearch()
  }

  onDelete = id => {
    console.log(id)
    this.setState(prevState => ({
      tracksList: prevState.tracksList.filter(each => each.id !== id),
    }))
  }

  renderSongsListView = tracksList => (
    <SongsList>
      {tracksList.map(each => (
        <SongItem key={each.id} songItem={each} onDelete={this.onDelete} />
      ))}
    </SongsList>
  )

  renderNoSongsView = () => (
    <NoSongs>
      <NoSongsText>No Songs Found</NoSongsText>
    </NoSongs>
  )

  renderSongsSection = (tracksList, searchInput) => {
    const filteredtracksList = tracksList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return filteredtracksList.length === 0
      ? this.renderNoSongsView()
      : this.renderSongsListView(filteredtracksList, searchInput)
  }

  render() {
    const {searchInput, tracksList} = this.state

    return (
      <SongPlayerComponent>
        <Banner>
          <BHead>Ed Sheeran</BHead>
          <BSubHead>Singer</BSubHead>
        </Banner>
        <SongsSection>
          <HeadSearch>
            <SongsHead>Songs Playlist</SongsHead>
            <SearchBox>
              <Search
                type="search"
                value={searchInput}
                placeholder="Search"
                onChange={this.onSearchChange}
                onKeyDown={this.onSearchEnter}
              />
              <SearchBtn type="button">
                <IoIosSearch size="20" color="#ffffff" />
              </SearchBtn>
            </SearchBox>
          </HeadSearch>
          {this.renderSongsSection(tracksList, searchInput)}
        </SongsSection>
      </SongPlayerComponent>
    )
  }
}

export default SongPlayer
