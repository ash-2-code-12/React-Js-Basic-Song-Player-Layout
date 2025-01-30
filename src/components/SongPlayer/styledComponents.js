import styled from 'styled-components'

export const SongPlayerComponent = styled.main`
  min-height: 100vh;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`
export const Banner = styled.section`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  height: 45vh;
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 8px;
  font-family: 'Roboto';
  padding: 28px 14px;
  @media (min-width: 576px) {
    padding: 36px 72px;
    background-position: left top;
  }
`
export const BHead = styled.h1`
  color: #ffffff;
  margin: 0;
  font-weight: 500;
  font-size: 32px;
  @media (min-width: 576px) {
    font-size: 48px;
  }
`
export const BSubHead = styled.p`
  color: #ffffff;
  margin: 0;
  font-size: 24px;
  @media (min-width: 576px) {
    font-size: 32px;
  }
`
export const SongsSection = styled.section`
  min-height: 55vh;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: #152850;
  padding: 20px 40px;
  color: #ffffff;
`
export const SongsHead = styled.h2`
  font-size: 26px;
  margin: 0;
`
export const SongsList = styled.ul`
  list-style-type: none;
  margin: 16px 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`
export const NoSongs = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const NoSongsText = styled.p`
  font-size: 28px;
  color: #fffffff;
  font-weight: 500;
`
export const HeadSearch = styled.div`
  display: flex;
  justify-content: space-between;
`
export const SearchBox = styled.div`
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  margin: 2px 0;
  width: 248px;
  display: flex;
  gap: 8px;
  padding: 4px;
`
export const Search = styled.input`
  color: #fffff;
  background: transparent;
  margin: 0;
  height: 100%;
  width: 100%;
  font-size: 14px;
  color: #ffffff;
  outline: none;
  border: none;
`
export const SearchBtn = styled.button`
  background: transparent;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`
