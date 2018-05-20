import { FlexBox } from '../';
import * as components from '../components';
import { TextType } from '../components';
import { FLEX_CONFIGS } from './Configs/FlexConfigs';

const HEADINGS = ['Name', 'Year', 'scores '];
const DATA = [['Dave', '10', '90'], ['Sophie', '9', '85'], ['Ronaldo', '12', '45']];
const TITLE = 'Student Details';

describe('Flex Test', () => {
  FLEX_CONFIGS.forEach((fProps, index) => {
    it(`Flex Config ${index} `, () => {
      let flex = new FlexBox(fProps);

      flex.add(
        components.getTable({
          data: DATA,
          headings: HEADINGS,
          title: TITLE
        })
      );

      flex.add(
        components.getTable({
          data: DATA,
          headings: HEADINGS,
          title: TITLE
        })
      );
      flex.addDivider();
      flex.add(
        components.getText({
          text: 'This page is for testing',
          type: TextType.h3
        })
      );

      expect(flex.construct().replace(/\n*\t*\r*\s+/g, ' ')).toMatchSnapshot();
    });
  });
});
