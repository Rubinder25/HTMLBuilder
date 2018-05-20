import { Page, FlexBox, JustifyContent } from '../';
import * as components from '../components';
import { TextType, Colors, getThemeShades } from '../components';

const HEADINGS = ['Name', 'Year', 'scores '];
const DATA = [['Dave', '10', '90'], ['Sophie', '9', '85'], ['Ronaldo', '12', '45']];
const TITLE = 'Student Details';

describe('Page Test', () => {
  it('Config 1', () => {
    let page = new Page({});
    page.add(
      components.getTable({
        data: DATA,
        headings: HEADINGS,
        title: TITLE
      })
    );
    page.add(
      components.getTable({
        data: DATA,
        headings: HEADINGS,
        title: TITLE
      })
    );

    page.add(
      components.getText({
        text: 'This page is for testing',
        type: TextType.h3
      })
    );

    expect(page.construct().replace(/\n*\t*\r*\s+/g, ' ')).toMatchSnapshot();
  });

  it('Config 2', () => {
    let page = new Page({});
    let flex = new FlexBox({
      alignItems: JustifyContent.spaceAround,
      backgroundColor: Colors.teal
    });

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

    flex.add(
      components.getText({
        text: 'This page is for testing',
        type: TextType.h3
      })
    );

    page.add(
      components.getTable({
        data: DATA,
        headings: HEADINGS,
        title: TITLE
      })
    );
    page.add(flex.construct());
    page.add(
      components.getTable({
        data: DATA,
        headings: HEADINGS,
        title: TITLE
      })
    );

    page.add(
      components.getText({
        text: 'This page is for testing',
        type: TextType.h3
      })
    );

    expect(page.construct().replace(/\n*\t*\r*\s+/g, ' ')).toMatchSnapshot();
  });

  it('Config 3', () => {
    let page = new Page({
      width: '500px',
      height: '1000px',
      backgroundColor: getThemeShades(Colors.blue).l1
    });

    page.add(
      components.getTable({
        data: DATA,
        headings: HEADINGS,
        title: TITLE
      })
    );

    page.add(
      components.getTable({
        data: DATA,
        headings: HEADINGS,
        title: TITLE
      })
    );

    page.add(
      components.getText({
        text: 'This page is for testing',
        type: TextType.h3
      })
    );

    expect(page.construct().replace(/\n*\t*\r*\s+/g, ' ')).toMatchSnapshot();
  });
});
