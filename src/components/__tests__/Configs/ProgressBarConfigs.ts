import * as Components from '../../';
import { Colors } from '../../';

export const PROGRESSBAR_CONFIGS: Components.Bar[] = [
  {
    percentFull: 75
  },
  {
    itemsHorizontal: false,
    percentFull: 75
  },
  {
    itemsHorizontal: true,
    percentFull: 75
  },
  {
    itemsHorizontal: true,
    percentFull: 75,
    color: Colors.blue
  }
];
