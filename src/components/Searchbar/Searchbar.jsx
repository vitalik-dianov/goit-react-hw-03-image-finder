import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import { SearchButton } from './Searchbar.styled';

const SearchForm = styled(Form)`
  margin-bottom: 10px;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.61);
  padding: 30px 0px;
  text-align: center;
  background: #a80385;
`;
const SearchInput = styled(Field)`
  padding: ${p => p.theme.space[0]};

  width: 300px;
  height: 40px;
  border: none;
  border-radius: 3px;
  text-align: center;
  line-height: 1;
`;

export const Searchbar = ({ onSubmit }) => {
  return (
    <header>
      <Formik initialValues={{ querry: '' }} onSubmit={onSubmit}>
        <SearchForm>
          <SearchInput
            name="querry"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <SearchButton type="submit">
            <span>search</span>
          </SearchButton>
        </SearchForm>
      </Formik>
    </header>
  );
};
