import { Colors } from '../../components';
import { FlexProps, JustifyContent } from '../../';

export const FLEX_CONFIGS: FlexProps[] = [
  {
    alignItems: JustifyContent.center,
    itemsHorizontal: false
  },
  {
    alignItems: JustifyContent.left,
    itemsHorizontal: true,
    backgroundColor: Colors.blue
  },
  {
    alignItems: JustifyContent.right,
    backgroundColor: Colors.grey
  },
  {
    alignItems: JustifyContent.spaceAround
  },
  {
    alignItems: JustifyContent.spaceBetween
  },
  {
    alignItems: JustifyContent.spaceEvenly
  },
  {
    alignItems: JustifyContent.stretch
  }
];
