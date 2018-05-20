import { Colors, getThemeShades } from './Common';

export enum TextType {
  h1,
  h2,
  h3,
  small,
  footerText,
  sub
}
export interface Text {
  color?: Colors; // by default its black
  text: string;
  type: TextType;
  styles?: string;
}

enum FontSize {
  h1 = '40px',
  h2 = '30px',
  h3 = '20px',
  small = '15px'
}

interface Configuration {
  fontSize: string;
  color: string;
}

export const getText = (text: Text): string => {
  const CONFIG: Configuration = getConfiguration(text);

  if (text.type === TextType.sub) {
    return `<sub class='subText' style= '${CONFIG.color}'>
                ${text.text}
                ${text.styles || ''};
              </sub>`;
  }

  return `<div class='text' 
                style= '${CONFIG.fontSize};
                        ${CONFIG.color};
                        ${text.styles || ''};
            '>
                ${text.text}
            </div>`;
};

const getConfiguration = (text: Text): Configuration => {
  const color = text.color != null ? `color: ${getThemeShades(text.color).l3}` : 'color: #000';

  let fontSize = '';
  switch (text.type) {
    case TextType.h1:
      fontSize = `font-size: ${FontSize.h1}`;
      break;
    case TextType.h2:
      fontSize = `font-size: ${FontSize.h2}`;
      break;
    case TextType.h3:
      fontSize = `font-size: ${FontSize.h3}`;
      break;
    case TextType.small:
      fontSize = `font-size: ${FontSize.small}`;
      break;
  }
  const CONFIG: Configuration = {
    fontSize: fontSize,
    color: color
  };
  return CONFIG;
};
