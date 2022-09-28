import styled from '@emotion/styled';

export const FormField = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 2px solid black;
`;

export const Input = styled.input`
  font-family: 'Times New Roman', Times, serif;
  font-size: 24px;
  width: 100%;
  height: 40px;
  color: black;
  margin-bottom: 10px;
  border-color: grey;

  &:focus {
    outline: none;
    border-color: #719ece;
    box-shadow: 0 0 10px #719ece;
  }
`;

export const Label = styled.label`
  font-family: 'Times New Roman', Times, serif;
  font-size: 24px;
  margin-left: 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  font-family: 'Times New Roman', Times, serif;
  font-size: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  color: black;
  background-color: white;
  border-color: grey;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  cursor: pointer;
  min-width: 200px;
  height: 50px;
  margin-top: 30px;
  margin-left: 10px;
  margin-bottom: 10px;
  padding: 10px 32px;
`;
