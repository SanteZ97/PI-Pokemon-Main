import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { WidgetA } from "../../css/DesignPatterns/WidgetA";

export const CreatePokemonContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 1em;
  top: 12rem;
  width: 15.2rem;
  z-index: 11;
  transition: 200ms ease-out;
  height: 0;

  ${(props) =>
    props.dropdown === "true" &&
    css`
      ${WidgetA}
      background-color: ${(props) => props.theme.colors.primary};
      height: 15em;
    `}
`;

export const DropdownButton = styled.button`
  ${WidgetA}
  z-index: 20;
  padding: 1.3em;
  height: 5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  transition: 200ms ease-out;

  ${(props) =>
    props.dropdown === "true" &&
    css`
      background-color: ${(props) => props.theme.colors.secondary};
      height: 3em;
      box-shadow: none;
    `}
`;

export const DropdownText = styled.label`
  pointer-events: none;
  font-size: 2em;
  font-family: Signika;
  opacity: 100%;
  transition: opacity 200ms linear;
  color: ${(props) => props.theme.colors.text};

  ${(props) =>
    props.dropdown === "true" &&
    css`
      opacity: 0%;
    `}
`;

export const DropdownSVG = styled.div`
  fill: ${(props) => props.theme.colors.text};
  ${(props) =>
    props.dropdown === "true" &&
    css`
      transform: rotate(180deg);
    `}
`;

export const LinkToCreation = styled.div`
  display: flex;
  height: 100%;
  opacity: 0%;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.dropdown === "true" &&
    css`
      opacity: 100%;
    `}
`;

export const CreationButton = styled(Link)`
  pointer-events: none;
  text-decoration: none;
  font-family: Signika;
  font-size: 1.4rem;
  background-color: ${(props) => props.theme.colors.secondary};
  line-height: 3rem;
  width: 80%;
  border-radius: 0.5rem;
  text-align: center;
  vertical-align: middle;
  color: ${(props) => props.theme.colors.accent};
  transition: 100ms ease-out, font-size 300ms ease-in-out;
  opacity: 0%;

  &:hover {
    ${WidgetA}
    background-color: ${(props) => props.theme.colors.tertiary};
    color: ${(props) => props.theme.colors.text};
    font-size: 1.6rem;
  }
  
  ${(props) =>
    props.dropdown === "true" &&
    css`
      pointer-events: all;
      opacity: 100%;
    `}
`;
