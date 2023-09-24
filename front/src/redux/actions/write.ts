const CHANGE_WRITE = "write/CHANGE" as const;

export function changeWrite() {
  return {
    type: CHANGE_WRITE,
  };
}
