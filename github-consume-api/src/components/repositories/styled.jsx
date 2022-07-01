import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
  font-size: 20px;
  width: 100%;
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  flex-direction: row;
  margin: 0;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;
WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
  width: 50%;
  border: 3px solid blue;
  user-select: none;
  cursor: pointer;

  &:focus{
    outline: none;
    font-weight: bold;
  }

  &.is-selected{
    font-weight: bold;
  }
`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
  padding: 8px;
  border: 3px solid black;
  display: none;
  width: 100%;

  &.is-selected{
    display: block;
  }
`;
WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;