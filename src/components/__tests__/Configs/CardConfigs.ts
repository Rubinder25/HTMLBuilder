import * as Components from '../../';
import { Colors } from '../../';

const HEAD = 'Heading';
const Content = 'This is the contents of the card...';

export const CARD_CONFIGS: Components.Card[] = [
  {
    content: Content,
    heading: HEAD
  },
  {
    content: Content,
    heading: HEAD,
    hasHeadingShadow: true
  },
  {
    content: Content,
    heading: HEAD,
    hasHeadingShadow: true,
    isContentCenter: true,
    isHeadingCenter: true,
    headBackgroundColor: Colors.green
  },
  {
    content: Content,
    heading: HEAD,
    hasHeadingShadow: true,
    isContentCenter: true,
    isHeadingCenter: true,
    hasShadow: true
  },
  {
    content: Content,
    heading: HEAD,
    isContentCenter: true,
    isHeadingCenter: true,
    borderColor: Colors.blue,
    headBackgroundColor: Colors.pink
  }
];
