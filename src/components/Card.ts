import { Colors, CommonProps, getCommonProps, getThemeShades } from './Common';

export interface Card extends CommonProps {
  isHeadingCenter?: boolean; //by default everything is on the left
  isContentCenter?: boolean;
  hasShadow?: boolean; // by default its false
  heading?: string;
  content: string;
  cardStyles?: string;
  headStyles?: string;
  contentStyles?: string;
  hasHeadingShadow?: boolean; // by default its false
  headBackgroundColor?: Colors;
  contentBackgroundColor?: Colors;
  borderColor?: Colors;
}
interface Configuration {
  headCenter: string;
  contentCenter: string;
  shadowClass: string;
  cardBorder: string;
  headBackgroundColor: string;
  headColor: string;
  headShadow: string;
}

export const getCard = (card: Card): string => {
  const CONFIG = getConfiguration(card);
  const cardHtml: string[] = [];
  cardHtml.push(` <div class='paper card ${CONFIG.shadowClass}' style='
                          ${getCommonProps(card)} ${card.cardStyles || ''}; 
                          ${CONFIG.cardBorder};
          '>  `);
  if (card.heading) {
    cardHtml.push(`<div class='cardHead ${CONFIG.headShadow}' style= ' ${CONFIG.headBackgroundColor};
                                                    ${CONFIG.headColor};
                                                    ${CONFIG.headCenter};
                                                    ${card.headStyles || ''};
                  '>
                  ${card.heading || ''}
              </div>`);
  }
  cardHtml.push(`  <div class='cardContents' style= '${CONFIG.contentCenter}; 
                                                      ${card.contentStyles || ''};
                    '>
                    ${card.content}
                </div>
              </div>  `);
  return cardHtml.join('');
};

const getConfiguration = (card: Card): Configuration => {
  const HEAD_CENTER = card.isHeadingCenter ? 'text-align: center' : 'text-align: left';
  const CONTENT_CENTER = card.isContentCenter ? 'text-align: center' : 'text-align:left';
  const SHADOW_CLASS = card.hasShadow ? 'shadow' : '';
  const HEAD_SHADOW_CLASS = card.hasHeadingShadow ? 'shadow' : '';
  const CARD_BORDER = card.borderColor != null ? ` border: 1px solid  ${getThemeShades(card.borderColor).l3}` : '';

  let headBackgroundColor = '';
  let headColor = '';
  if (card.headBackgroundColor == undefined) {
    headBackgroundColor = 'background: rgba(0,0,0,.03)';
    headColor = 'color: rgba(0,0,0,.54)';
  } else {
    headBackgroundColor = `background: ${getThemeShades(card.headBackgroundColor).l3}`;
    headColor = 'color: #fff';
  }
  const CONFIG: Configuration = {
    headCenter: HEAD_CENTER,
    cardBorder: CARD_BORDER,
    contentCenter: CONTENT_CENTER,
    shadowClass: SHADOW_CLASS,
    headBackgroundColor: headBackgroundColor,
    headColor: headColor,
    headShadow: HEAD_SHADOW_CLASS
  };
  return CONFIG;
};
