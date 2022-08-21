import styled from 'styled-components'

export const SearchFormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;

  div {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
`

export const SearchForm = styled.form`
  width: 100%;
  display: flex;
  gap: 0.5rem;

  input {
    padding: 0.875rem 1rem;
    flex: 1;
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme['base-border']};
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
  }
`

export const SearchFormButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: ${(props) => props.theme['base-profile']};

  border: 0;
  border-radius: 8px;

  background: ${(props) => props.theme.blue};
  padding: 1rem 2rem;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    transform: scale(0.95);
    transition: opacity 0.2s, scale 0.2s ease;
  }
`
