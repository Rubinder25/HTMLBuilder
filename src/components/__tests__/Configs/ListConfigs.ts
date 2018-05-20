import * as Components from '../../';
import { Colors } from '../../';

const TITLE = 'List Title';
const DATA = ['item 1', 'items 2', 'item 3'];
export const LIST_CONFIGS: Components.List[] = [
  {
    data: DATA,
    title: TITLE
  },
  {
    data: DATA,
    title: TITLE,
    sideLineColor: Colors.blue,
    hasShadow: false,
    backgroundColor: Colors.teal
  },
  {
    data: DATA,
    title: TITLE,
    sideLineColor: Colors.blue,
    hasShadow: true,
    backgroundColor: Colors.indigo,
    hasSeparatorLines: false
  },
  {
    data: DATA,
    title: TITLE,
    sideLineColor: Colors.blue,
    hasShadow: true,
    backgroundColor: Colors.indigo,
    hasSeparatorLines: true
  },
  {
    data: DATA,
    title: '',
    sideLineColor: Colors.blue,
    hasShadow: true,
    backgroundColor: Colors.indigo,
    hasSeparatorLines: true
  }
];
