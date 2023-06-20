import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { orderPokemons, fetchPokemons } from "../../redux/actions";
import {
  OrderContainer,
  SelectOption,
  Select,
  Option,
  ResetButton,
} from "./StyledSearchOrder";

const SearchOrder = () => {
  const [mounted, setMounted] = useState(false);
  const [orderRules, setOrderRules] = useState(() => {
    const storedOrderRules = localStorage.getItem("orderRules");
    return storedOrderRules ? JSON.parse(storedOrderRules) : { name: "", attack: "" };
  });
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    if (event.target.id === "name") {
      setOrderRules({ ...orderRules, name: event.target.value || "" });
    }
    if (event.target.id === "attack") {
      setOrderRules({ ...orderRules, attack: event.target.value || "" });
    }
  };

  const clearFilters = () => {
    setOrderRules({ name: "", attack: "" });
  };

  useEffect(() => {
    if (mounted) {
      if (orderRules.name || orderRules.attack) {
        dispatch(orderPokemons(orderRules));
      } else {
        dispatch(fetchPokemons());
      }
    } else {
      setMounted(true);
    }
  }, [dispatch, orderRules, mounted]);

  useEffect(() => {
    localStorage.setItem("orderRules", JSON.stringify(orderRules));
  }, [orderRules]);

  const isFilterApplied = orderRules.name || orderRules.attack;

  return (
    <OrderContainer>
      <SelectOption>
        <Select id="name" value={orderRules.name} onChange={onChangeHandler}>
          <Option value="">Order by name</Option>
          <Option value="asc">A-Z</Option>
          <Option value="desc">Z-A</Option>
        </Select>
        <Select id="attack" value={orderRules.attack} onChange={onChangeHandler}>
          <Option value="">Order by attack</Option>
          <Option value="asc">Lowest to highest</Option>
          <Option value="desc">Highest to lowest</Option>
        </Select>
      </SelectOption>
      {isFilterApplied && (
        <ResetButton onClick={clearFilters}>Clear Filters</ResetButton>
      )}
    </OrderContainer>
  );
};

export default SearchOrder;
