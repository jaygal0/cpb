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
  padding: 6.4rem 2.4rem 2.4rem 0;
  max-width: 20vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  color: ${({ theme }) => theme.color.green.primary};
  font-size: ${({ theme }) => theme.type.md};
  position: absolute;
  right: 0;
`

export const IndexIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`

export const IndexBuiltByContainer = styled.div`
  text-transform: capitalize;
  color: ${({ theme }) => theme.color.white};
  font-weight: 300;
`

export const Button = styled.button`
  background: transparent;
  border: none;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`
