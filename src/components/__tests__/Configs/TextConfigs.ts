import * as Components from '../../';
import { Colors, TextType } from '../../';

const TEXT = 'This is test text';
export const TEXT_CONFIGS: Components.Text[] = [
  {
    text: TEXT,
    type: TextType.h1,
    color: Colors.blue
  },
  {
    text: TEXT,
    type: TextType.h2,
    color: Colors.green
  },
  {
    text: TEXT,
    type: TextType.h3
  },
  {
    text: TEXT,
    type: TextType.footerText
  },
  {
    text: TEXT,
    type: TextType.small
  },
  {
    text: TEXT,
    type: TextType.sub
  }
];
