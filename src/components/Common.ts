export enum Colors {
  blue,
  pink,
  green,
  orange,
  teal,
  indigo,
  grey
}
export interface ThemeShades {
  l1: string;
  l2: string;
  l3: string;
}
export interface CommonProps {
  //TODO put change it to CommonProps
  width?: string;
  height?: string;
}

export const getThemeShades = (theme: Colors | undefined): ThemeShades => {
  // l1 = 100, l2 = 300, l3 = 800
  switch (theme) {
    case Colors.blue:
      return {
        l1: '#BBDEFB',
        l2: '#64B5F6',
        l3: '#1565C0'
      };
    case Colors.pink:
      return {
        l1: '#F8BBD0',
        l2: '#F06292',
        l3: '#AD1457'
      };
    case Colors.green:
      return {
        l1: '#C8E6C9',
        l2: '#81C784',
        l3: '#2E7D32'
      };
    case Colors.orange:
      return {
        l1: '#FFE0B2',
        l2: '#FFB74D',
        l3: '#EF6C00'
      };
    case Colors.teal:
      return {
        l1: '#B2DFDB',
        l2: '#4DB6AC',
        l3: '#00695C'
      };
    case Colors.indigo:
      return {
        l1: '#C5CAE9',
        l2: '#7986CB',
        l3: '#283593'
      };
    case Colors.grey:
      return {
        l1: '#F5F5F5',
        l2: '#BDBDBD',
        l3: '#424242'
      };
    default:
      return {
        l1: '#F5F5F5',
        l2: '#BDBDBD',
        l3: '#424242'
      };
  }
};
//TODO use join instead of +=
export const getCommonProps = (ele: CommonProps): string => {
  let styles: string[] = [];
  styles.push(`width: ${ele.width || 'fit-content'};`);
  styles.push(`height: ${ele.height || 'auto'};`);
  styles.push('margin: 4px 4px;');

  return styles.join('');
};
