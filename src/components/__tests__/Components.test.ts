import * as Components from '../';
import { TABLE_CONFIGS, CARD_CONFIGS, CONATINER_CONFIGS, CHIP_CONFIGS, PROGRESSBAR_CONFIGS, TEXT_CONFIGS } from './Configs';
import { LIST_CONFIGS } from './Configs/ListConfigs';

describe('Test Table', () => {
  TABLE_CONFIGS.forEach((config, index) => {
    it(`Table Config ${index}`, () => {
      const TABLE = Components.getTable(config);
      expect(TABLE.replace(/\n*\t*\r*\s+/g, ' ')).toMatchSnapshot();
    });
  });
});

describe('Test Card', () => {
  CARD_CONFIGS.forEach((config, index) => {
    it(`Card Config ${index}`, () => {
      const CARD = Components.getCard(config);
      expect(CARD.replace(/\n*\t*\r*\s+/g, ' ')).toMatchSnapshot();
    });
  });
});

describe('Test Container', () => {
  CONATINER_CONFIGS.forEach((config, index) => {
    it(`Card Config ${index}`, () => {
      const CONTAINER = Components.getContainer(config);
      expect(CONTAINER.replace(/\n*\t*\r*\s+/g, ' ')).toMatchSnapshot();
    });
  });
});

describe('Test Chip', () => {
  CHIP_CONFIGS.forEach((config, index) => {
    it(`Card Config ${index}`, () => {
      const CHIP = Components.getChip(config);
      expect(CHIP.replace(/\n*\t*\r*\s+/g, ' ')).toMatchSnapshot();
    });
  });
});

describe('Test List', () => {
  LIST_CONFIGS.forEach((config, index) => {
    it(`List Config ${index}`, () => {
      const LIST = Components.getList(config);
      expect(LIST.replace(/\n*\t*\r*\s+/g, ' ')).toMatchSnapshot();
    });
  });
});

describe('Test Progress Bar', () => {
  PROGRESSBAR_CONFIGS.forEach((config, index) => {
    it(`Progress Bar Config ${index}`, () => {
      const BAR = Components.getProgressBar(config);
      expect(BAR.replace(/\n*\t*\r*\s+/g, ' ')).toMatchSnapshot();
    });
  });
});

describe('Test Text', () => {
  TEXT_CONFIGS.forEach((config, index) => {
    it(`Text Config ${index}`, () => {
      const TEXT = Components.getText(config);
      expect(TEXT.replace(/\n*\t*\r*\s+/g, ' ')).toMatchSnapshot();
    });
  });
});
