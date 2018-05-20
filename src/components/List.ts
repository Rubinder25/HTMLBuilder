import { Colors, CommonProps, getCommonProps, getThemeShades } from './Common';

export interface List extends CommonProps {
  hasShadow?: boolean; // by default its false
  title: string;
  data: string[];
  sideLineColor?: Colors;
  backgroundColor?: Colors;
  hasSeparatorLines?: boolean; //by default its false
  cardStyles?: string;
  listItemStyles?: string;
  listTitleStyles?: string;
}
interface Configuration {
  ListBackgroundColor: string;
  SideLine: string;
  ShadowClass: string;
  SeperatorLine: string;
}
export let getList = (list: List): string => {
  let listHtml: string[] = [];
  const CONFIG: Configuration = getConfiguration(list);

  listHtml.push(` <div class='listCard ${CONFIG.ShadowClass}' 
                        style='
                                ${getCommonProps(list)};
                                ${CONFIG.ListBackgroundColor};
                                ${CONFIG.SideLine};
                                ${list.cardStyles};
                                '
                    > `);

  listHtml.push(`<div class = 'listTitle' 
                        style=' ${list.listTitleStyles || ''};
                                ${list.listTitleStyles};' 
                        >
                     ${list.title}
                    </div> `);

  for (let i = 0; i < list.data.length; i++) {
    listHtml.push(`<div class='listItems'
                          style=' ${CONFIG.SeperatorLine};
                                  ${list.listItemStyles};
                                '
                      >
                     ${list.data[i]}
                    </div>`);
  }

  listHtml.push(`</div>`);
  return listHtml.join('');
};

const getConfiguration = (list: List): Configuration => {
  const LIST_BACKGROUND_COLOR =
    list.backgroundColor != null ? `background-color: ${getThemeShades(list.backgroundColor).l1}` : 'background-color: #fff';
  const SIDE_LINE = list.sideLineColor != null ? `border-left: 2px solid ${getThemeShades(list.sideLineColor).l3}` : '';
  const SHADOW_CLASS = list.hasShadow ? 'shadow' : '';
  let SEPERATOR_LINE = '';
  if (list.hasSeparatorLines) {
    SEPERATOR_LINE = list.backgroundColor != null ? ` border-bottom: 1px solid ${getThemeShades(list.backgroundColor).l2}` : '';
  }

  const CONFIG: Configuration = {
    ListBackgroundColor: LIST_BACKGROUND_COLOR,
    SeperatorLine: SEPERATOR_LINE,
    ShadowClass: SHADOW_CLASS,
    SideLine: SIDE_LINE
  };

  return CONFIG;
};
