import * as Components from '../../';
import { Colors, Position } from '../../';

const CONTENTS = 'text inside a container';
export const CONATINER_CONFIGS: Components.Container[] = [
  {
    alignItems: Position.bottomCenter,
    contents: CONTENTS,
    backgroundColor: Colors.teal,
    width: '300px',
    height: '300px'
  },
  {
    alignItems: Position.center,
    contents: CONTENTS,
    backgroundColor: Colors.grey,
    width: '300px',
    height: '300px'
  },
  {
    alignItems: Position.leftBottom,
    contents: CONTENTS,
    width: '300px',
    height: '300px',
    backgroundColor: Colors.orange
  },
  {
    alignItems: Position.leftCenter,
    contents: CONTENTS,
    width: '300px',
    height: '300px',
    backgroundColor: Colors.blue
  },
  {
    alignItems: Position.leftTop,
    contents: CONTENTS,
    width: '300px',
    height: '300px',
    backgroundColor: Colors.pink
  },
  {
    alignItems: Position.rightBottom,
    contents: CONTENTS,
    width: '300px',
    height: '300px',
    backgroundColor: Colors.green
  },
  {
    alignItems: Position.rightCenter,
    contents: CONTENTS,
    width: '300px',
    height: '300px'
  },
  {
    alignItems: Position.rightTop,
    contents: CONTENTS,
    width: '300px',
    height: '300px',
    backgroundColor: Colors.indigo
  },
  {
    alignItems: Position.topCenter,
    contents: CONTENTS,
    width: '300px',
    height: '300px',
    backgroundColor: Colors.pink
  }
];
