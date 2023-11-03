import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.bgDefault};
`;

export const Container = styled.div`
  max-width: 1440px;
  padding: 0 20px;
`;

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;

export const FilterSortContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const FilterSelect = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: ${(props) => props.theme.textDark};
  color: ${(props) => props.theme.textDark};
  font-size: 16px;
  margin-right: 10px;
  cursor: pointer;
`;

export const SortSelect = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: ${(props) => props.theme.textDark};
  color: #333;
  font-size: 16px;
  cursor: pointer;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  padding: 5px;
`;

export const PaginationButton = styled.button`
  padding: 8px 12px;
  margin: 0 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: ${(props) => (props.isActive ? "darkBlue" : "white")};
  color: ${(props) => (props.isActive ? "white" : "#333")};
  cursor: pointer;
  &:hover {
    background-color: darkblue;
    color: white;
  }
`;
