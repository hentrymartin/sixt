export const ON_CHANGE = 'ON_CHANGE';
export const ON_TOGGLE_ALL = 'ON_TOGGLE_ALL';
export const ON_TOGGLE_ROW = 'ON_TOGGLE_ROW';
export const ON_VALIDATE = 'ON_VALIDATE';


export function onChange(property, index, value) {
  return {
    type: ON_CHANGE,
    property,
    index,
    value,
  };
}

export function onCheckAll(isChecked) {
  return {
    type: ON_TOGGLE_ALL,
    isChecked,
  };
}

export function onCheckRow(index) {
  return {
    type: ON_TOGGLE_ROW,
    index,
  };
}

export function onValidate() {
  return {
    type: ON_VALIDATE,
  };
}
