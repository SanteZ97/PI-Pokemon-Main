import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { orderPokemons, fetchPokemons } from "../../redux/actions";
import { OrderContainer, SelectOption, Select, Option } from "./StyledSearchOrder";

const SearchOrder = () => {
  const [orderRules, setOrderRules] = useState(() => {
    const storedOrderRules = localStorage.getItem("orderRules");
    return storedOrderRules
      ? JSON.parse(storedOrderRules)
      : { name: "", attack: "" };
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

  useEffect(() => {
    if (orderRules.name || orderRules.attack) {
      dispatch(orderPokemons(orderRules));
    } else {
      dispatch(fetchPokemons());
    }
  }, [dispatch, orderRules]);

  useEffect(() => {
    localStorage.setItem("orderRules", JSON.stringify(orderRules));
  }, [orderRules]);

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
    </OrderContainer>
  );
};

export default SearchOrder;
