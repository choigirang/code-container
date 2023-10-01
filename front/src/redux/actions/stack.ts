const SELECTED_STACK = "stack/SELECT" as const;

export function selectStack(stack: string) {
  return {
    type: SELECTED_STACK,
    payload: stack,
  };
}

export function selectData() {}
