import styled from 'styled-components'

export const SongItemComponent = styled.li`
  height: 100px;
  display: flex;
  gap: 16px;
  margin: 0 16px 0 0;
`
export const SongImg = styled.img`
  height: 100%;
  aspect-ratio: 14/9;
  margin: 0;
`
export const Details = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
`
export const NameGenre = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  margin: 0;
`
export const Name = styled.p`
  font-weight: 500;
  font-size: 20px;
  margin: 0;
`
export const Genre = styled(Name)`
  color: #3b82f6;
`
export const DurationDelete = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  gap: 24px;
`
export const Duration = styled(Name)`
  font-weight: default;
  font-size: 18px;
`
export const DeleteBtn = styled.button`
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
