import { Colors, CommonProps, getCommonProps, getThemeShades } from './Common';
export interface Table extends CommonProps {
  data: string[][];
  headings?: string[];
  title?: string;
  hasCardShadow?: boolean; // by default its true
  hasTableShadow?: boolean; // by default its true
  hasShadedLines?: boolean; // by default has lines
  cardBorderColor?: Colors;
  tableBorderColor?: Colors;
  isTitleCenter?: boolean; // by default everythings is at left
  isHeadingsCenter?: boolean;
  isDataCenter?: boolean;
  headingColor?: Colors;
  headStyles?: string;
  rowOddStyles?: string;
  rowEvenStyles?: string;
  cellStyles?: string;
  cardStyles?: string;
  tableStyles?: string;
}
interface Configuration {
  shadowClassCard: string;
  shadowClassTable: string;
  cardBorder: string;
  tableBorder: string;
  titleCenter: string;
  headCenter: string;
  dataCenter: string;
  headBackground: string;
}
export const getTable = (table: Table): string => {
  const tableHtml: string[] = [];
  const CONFIG = getConfiguration(table);

  tableHtml.push(`
      <div 
        class ='tableCard ${CONFIG.shadowClassCard}'
        style='${getCommonProps(table)}
               ${CONFIG.cardBorder};
               ${table.cardStyles || ''};' 
      >
    `);

  if (table.title) {
    tableHtml.push(`
        <div class='tableTitle' style=' ${CONFIG.titleCenter}; '> 
          ${table.title}
        </div>
      `);
  }

  tableHtml.push(`<table class='table ${CONFIG.shadowClassTable}' style='${CONFIG.tableBorder}; ${table.tableStyles || ''};'>`);

  // headings
  if (table.headings) {
    tableHtml.push(`
      <thead class='tableHead'
        style=' ${CONFIG.headBackground}; 
                ${table.headStyles || ''}; 
        '>
    `);
    for (let i = 0; i < table.headings.length; i++) {
      tableHtml.push(
        `<th class='tableHeadings' style='${CONFIG.headCenter}; '> 
                   ${table.headings[i]}
         </th>`
      );
    }
    tableHtml.push(`</thead>`);
  }

  // rows
  tableHtml.push(`<tbody>`);
  for (let i = 0; i < table.data.length; i++) {
    if (i % 2 == 0 && table.hasShadedLines) {
      tableHtml.push(`<tr class ='tableRowEven' style='${table.rowEvenStyles || ''};'>`);
    } else {
      tableHtml.push(`<tr class ='tableRowOdd' style='${table.rowOddStyles || ''};'>`);
    }

    // columns
    for (let j = 0; j < table.data[i].length; j++) {
      tableHtml.push(`<td class='tableCell' style= '${table.cellStyles || ''};
                                                    text-align: ${CONFIG.dataCenter};  
                        '>
                         ${table.data[i][j]}
                        </td>`);
    }
    tableHtml.push(`</tr>`);
  }

  tableHtml.push(`</tbody>`);
  tableHtml.push(`</table>`);
  tableHtml.push(`</div>`);

  return tableHtml.join('');
};

const getConfiguration = (table: Table): Configuration => {
  const SHADOW_CLASS_CARD = table.hasCardShadow ? 'shadow' : '';
  const SHADOW_CLASS_TABLE = table.hasTableShadow ? 'shadow' : '';
  const CARD_BORDER = table.cardBorderColor != null ? ` border: 1px solid  ${getThemeShades(table.cardBorderColor).l3}` : '';
  const TABLE_BORDER = table.tableBorderColor != null ? ` border: 1px solid  ${getThemeShades(table.tableBorderColor).l3}` : '';
  const TITLE_CENTER = table.isTitleCenter ? 'text-align: center' : 'text-align: left';
  const HEAD_CENTER = table.isHeadingsCenter ? 'text-align: center' : 'text-align: left';
  const DATA_CENTER = table.isDataCenter ? 'center' : 'left';
  const HEAD_BACKGROUND = table.headingColor != null ? `background-color: ${getThemeShades(table.headingColor).l3}` : 'background-color: #000';

  const CONFIG: Configuration = {
    shadowClassCard: SHADOW_CLASS_CARD,
    shadowClassTable: SHADOW_CLASS_TABLE,
    cardBorder: CARD_BORDER,
    tableBorder: TABLE_BORDER,
    titleCenter: TITLE_CENTER,
    headCenter: HEAD_CENTER,
    dataCenter: DATA_CENTER,
    headBackground: HEAD_BACKGROUND
  };
  return CONFIG;
};
