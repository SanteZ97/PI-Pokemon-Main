import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { orderPokemons } from "../../redux/actions";
import {
  OrderContainer,
  SelectOption,
  Select,
  Option,
  ResetButton,
} from "./StyledSearchOrder";

const SearchOrder = () => {
  const [orderRules, setOrderRules] = useState({ name: null, attack: null });
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    if (event.target.id === "name") {
      setOrderRules({ ...orderRules, name: event.target.value });
    }
    if (event.target.id === "attack") {
      setOrderRules({ ...orderRules, attack: event.target.value });
    }
  };

  useEffect(() => {
    dispatch(orderPokemons(orderRules));
  }, [dispatch, orderRules]);

  // Verificar si hay algún filtro aplicado
  const isFilterApplied = orderRules.name || orderRules.attack;

  // Restablecer los filtros
  const resetFilters = () => {
    setOrderRules({ name: null, attack: null });
  };

  return (
    <OrderContainer>
      <SelectOption>
        <label htmlFor="name">Sort by name:</label>
        <Select
          onChange={onChangeHandler}
          name="name"
          id="name"
          value={orderRules.name ? (orderRules.name === "asc" ? "asc" : "desc") : "0"}
        >
          <Option value="0" disabled style={{ display: "none" }}></Option>
          <Option value="asc">a → z</Option>
          <Option value="desc">z → a</Option>
        </Select>
      </SelectOption>
      <SelectOption>
        <label htmlFor="attack">Sort by attack:</label>
        <Select
          onChange={onChangeHandler}
          name="attack"
          id="attack"
          value={orderRules.attack ? (orderRules.attack === "desc" ? "desc" : "asc") : "0"}
        >
          <Option value="0" disabled style={{ display: "none" }}></Option>
          <Option value="desc">high → low</Option>
          <Option value="asc">low → high</Option>
        </Select>
      </SelectOption>
      {isFilterApplied && <ResetButton onClick={resetFilters}>Reset</ResetButton>}
    </OrderContainer>
  );
};

export default SearchOrder;
