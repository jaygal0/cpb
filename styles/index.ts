import styled from 'styled-components'

export const IndexMainContainer = styled.main`
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.4rem;
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
