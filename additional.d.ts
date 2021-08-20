declare module globalThis {
  interface ShareData {
    text: string;
    title: string;
    url: string;
    files?: Array<File>;
  }
  interface Navigator {
    share: Function;
    canShare?: Function;
  }
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    gtag: typeof gtag;
    dataLayer: typeof any;
  }
}
