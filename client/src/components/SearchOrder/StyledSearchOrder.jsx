import styled from "styled-components";
import { WidgetA } from "../../css/DesignPatterns/WidgetA";

export const OrderContainer = styled.div`
  ${WidgetA};
  display: flex;
  justify-content: space-evenly;
  padding: 1rem;
  gap: 1rem;
  font-size: 1.1rem;
`;

export const SelectOption = styled.div`
  display: flex;
  flex-grow: 1;
  margin-left: 0.5rem;
  gap: 0.5rem;
`;

export const Select = styled.select`
  font-family: "Signika";
  font-size: 0.9em;
`;

export const Option = styled.option`
  font-family: "Signika";
  font-size: 1.2em;
`;

export const ResetButton = styled.button`
  font-family: "Signika";
  font-size: 0.9em;
  padding: 0.5em 1em;
  background-color: #e53935;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #c62828;
  }
`;
