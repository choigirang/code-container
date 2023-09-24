const SUPER_ACCOUNT = "superAccount/SUPER" as const;

export function changeAuthority(authority: boolean) {
  return {
    type: SUPER_ACCOUNT,
    payload: authority,
  };
}
