import styled from 'styled-components'
import breakpoints from '../../styles/breakpoints'

export const Container = styled.button`
  a {
    background-color: ${({ theme }) => theme.COLORS.DETAILS_500};
    color: white;
    border: 1px solid ${({ theme }) => theme.COLORS.DETAILS_900};
    border-radius: 3.2rem;
    display: flex;
    gap: .8rem;
    align-items: center;
    padding: .8rem 3.2rem;

    font-family: 'Roboto Slab', sans-serif;
    font-weight: bold;
    font-size: 1.8rem;

    @media ${breakpoints.desktop_only} {
      width: 28rem;
      height: 4.8rem;
      justify-content: center;
    }
  }
`