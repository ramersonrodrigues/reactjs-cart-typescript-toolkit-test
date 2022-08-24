import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    barMenu: {
      backgroundBar: string,
      TextInfor: string,
      backgroundCart: string,
      colorCart: string
    },
    body: {
      background: string,
    },
    cardProduct: {
      backgroundBar: string,
      background: string,
      fontBar: string,
      font: string,
      inforValueBackground: string,
      inforValueColor: string
    },
    checkout: {
      background: string,
      backgroundBar: string,
      font: string
    },
    cardCheckout: {
      background: string,
      font: string,
      inforValueColor: string,
      qtdBorder: string,
      qtdText: string
    },
    close: {
      background: string,
      icon: string
    },
    rodape: {
      background: string,
      font: string,
    }
  }
}