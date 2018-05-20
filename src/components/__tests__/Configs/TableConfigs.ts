import * as Components from '../../';
import { Colors } from '../../';

const HEADINGS = ['Name', 'Year', 'scores '];
const DATA = [['Dave', '10', '90'], ['Sophie', '9', '85'], ['Ronaldo', '12', '45']];
const TITLE = 'Student Details';

export const TABLE_CONFIGS: Components.Table[] = [
  {
    data: DATA
  },
  {
    data: DATA,
    headings: HEADINGS
  },
  {
    data: DATA,
    headings: HEADINGS,
    title: TITLE
  },
  {
    data: DATA,
    title: TITLE,
    cardBorderColor: Colors.green
  },
  {
    data: DATA,
    headings: HEADINGS,
    title: TITLE
  },
  {
    data: DATA,
    headings: HEADINGS,
    title: TITLE,
    hasShadedLines: false,
    isTitleCenter: false,
    isHeadingsCenter: false,
    isDataCenter: false,
    height: '400px',
    width: '400px',
    headingColor: Colors.green
  },
  {
    data: DATA,
    headings: HEADINGS,
    title: TITLE,
    hasShadedLines: false,
    isTitleCenter: false,
    isHeadingsCenter: false,
    isDataCenter: false,
    height: '400px',
    width: '400px'
  },
  {
    data: DATA,
    headings: HEADINGS,
    title: TITLE,
    hasShadedLines: true,
    isTitleCenter: true,
    isHeadingsCenter: false,
    isDataCenter: false,
    cardBorderColor: Colors.grey
  },
  {
    data: DATA,
    headings: HEADINGS,
    title: TITLE,
    hasShadedLines: true,
    isTitleCenter: true,
    headingColor: Colors.indigo,
    hasCardShadow: true
  },
  {
    data: DATA,
    headings: HEADINGS,
    title: TITLE,
    hasShadedLines: true,
    isTitleCenter: true,
    isHeadingsCenter: true,
    isDataCenter: true,
    cardBorderColor: Colors.blue,
    hasCardShadow: true
  },
  {
    data: DATA,
    headings: HEADINGS,
    title: TITLE,
    hasShadedLines: true,
    isTitleCenter: true,
    isHeadingsCenter: true,
    isDataCenter: true,
    tableBorderColor: Colors.blue,
  },
  {
    data: DATA,
    headings: HEADINGS,
    title: TITLE,
    hasShadedLines: true,
    isTitleCenter: true,
    isHeadingsCenter: true,
    isDataCenter: true,
    hasTableShadow: true
  }
];
