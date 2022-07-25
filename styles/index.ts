import styled from 'styled-components'

export const IndexMainContainer = styled.main`
  margin: 0 auto;
  min-height: 88vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
  background: ${({ theme }) => theme.color.green05};
`

export const IndexInputContainer = styled.div`
  width: 48rem;
  padding: 2.4rem 3.2rem;
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.green01};
  border-radius: ${({ theme }) => theme.radius.md};
  border: 2px solid ${({ theme }) => theme.color.green01};
`
