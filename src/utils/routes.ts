export const routes = {
  home: (): string => `/`,
  wrapper: {
    _: (): string => `/wrapper`,
    login: (): string => `/wrapper/login`,
  },
  generic: (): string => `*`,
};
