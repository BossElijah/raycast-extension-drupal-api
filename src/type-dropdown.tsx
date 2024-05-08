import { List } from "@raycast/api";
import { Dispatch, SetStateAction } from "react";

interface DropdownProps {
  onTypeChange: Dispatch<SetStateAction<string>>;
}

const types = ['global', 'class', 'file', 'property', 'function', 'service', 'trait'];

const TypeDropdown = ({ onTypeChange }: DropdownProps) => (
  <List.Dropdown
    tooltip="Filter on type"
    storeValue={true}
    onChange={(newValue) => {
      onTypeChange(newValue);
    }}
  >
    <List.Dropdown.Item key="default" title="No Filter" value="" />
    <List.Dropdown.Section title="Types">
      {types.map((type) => (
        <List.Dropdown.Item key={type} title={type} value={type} />
      ))}
    </List.Dropdown.Section>
  </List.Dropdown>
);

export default TypeDropdown;
