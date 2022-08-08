import { SassColor } from 'sass'
import styled from 'styled-components'

interface Main {
  theme: any
}

export const IndexMainContainer = styled.main<Main>`
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0rem;
  background: ${(props) =>
    props.theme == 'green'
      ? '#27C3B1'
      : props.theme == 'yellow'
      ? '#FFFD83'
      : props.theme == 'purple'
      ? '#2D3047'
      : props.theme == 'orange'
      ? '#FFB799'
      : props.theme == 'red'
      ? '#FB7C86'
      : '#27C3B1'};
  position: relative;
  transition: all 0.7s ease-in-out;
`

export const IndexMainBookContainer = styled.main`
  background: ${({ theme }) => theme.color.green.background};
  min-height: 100vh;
`

export const IndexInputContainer = styled.div`
  width: 48rem;
  padding: 2.4rem 3.2rem;
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.green01};
  border-radius: ${({ theme }) => theme.radius.md};
  border: 2px solid ${({ theme }) => theme.color.green01};
`

export const IndexFooterContainer = styled.footer`
  position: absolute;
  top: 0;
  right: 0;
  padding: 6.4rem 2.4rem 2.4rem 0;
  max-width: 20vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  color: ${({ theme }) => theme.color.green.primary};
  font-size: ${({ theme }) => theme.type.md};

  &.book-list {
    position: fixed;
  }
`

export const IndexIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`

export const IndexButton = styled.button`
  background: transparent;
  border: none;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`

export const IndexSearch = styled.input`
  margin: 0rem 0 1.2rem 2.4rem;
  font-size: ${({ theme }) => theme.type.size.sm};
  padding: 0.8rem 0.8rem;
  width: 40vw;
  background: #d8f8f4;
  outline: none;
  border: none;
  border-right: solid ${({ theme }) => theme.color.green.secondary} 1px;
  border-radius: 0.4rem 0 0 0.4rem;
  transition: all 0.3s ease-in-out;

  &:focus {
    box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.color.green.secondary}
      inset;
  }
`
export const IndexSelect = styled.select`
  font-size: ${({ theme }) => theme.type.size.sm};
  padding: 0.8rem 1.2rem;
  background: #d8f8f4;
  outline: none;
  border: none;
  border-radius: 0 0.4rem 0.4rem 0;
  text-transform: capitalize;
  background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Ctitle%3Edown-arrow%3C%2Ftitle%3E%3Cg%20fill%3D%22%23000000%22%3E%3Cpath%20d%3D%22M10.293%2C3.293%2C6%2C7.586%2C1.707%2C3.293A1%2C1%2C0%2C0%2C0%2C.293%2C4.707l5%2C5a1%2C1%2C0%2C0%2C0%2C1.414%2C0l5-5a1%2C1%2C0%2C1%2C0-1.414-1.414Z%22%20fill%3D%22%23000000%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E');
  background-repeat: no-repeat;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-size: 0.6em;
  background-position: calc(100% - 0.8em);
  width: 8vw;

  &:hover {
    cursor: pointer;
  }

  &::-ms-expand {
    display: none;
  }
`
