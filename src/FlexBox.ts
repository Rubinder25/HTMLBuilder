import { Colors, getThemeShades } from './components';

export enum JustifyContent {
  left,
  right,
  center,
  spaceBetween,
  spaceAround,
  spaceEvenly,
  stretch
}

export interface FlexProps {
  width?: string;
  height?: string;
  backgroundColor?: Colors;
  itemsHorizontal?: boolean; // by default items are horizontal
  alignItems: JustifyContent;
  styles?: string;
}

export class FlexBox {
  html: string[];
  flexProps: FlexProps;
  width: string;
  height: string;
  constructor(flexProps: FlexProps) {
    this.flexProps = flexProps;
    this.html = [];
    this.width = flexProps.width || 'auto';
    this.height = flexProps.height || 'auto';
  }

  private getFlexProps(): string {
    let props: string[] = [];
    const BACKGROUND_COLOR = this.flexProps.backgroundColor != null ? `background-color: ${getThemeShades(this.flexProps.backgroundColor).l1}` : '';

    let justifyContent = '';
    let flexDirection = this.flexProps.itemsHorizontal === false ? 'column' : 'row';

    switch (this.flexProps.alignItems) {
      case JustifyContent.left:
        justifyContent = 'flex-start;';
        break;
      case JustifyContent.right:
        justifyContent = 'flex-end;';
        break;
      case JustifyContent.center:
        justifyContent = 'center;';
        break;
      case JustifyContent.spaceAround:
        justifyContent = 'space-around;';
        break;
      case JustifyContent.spaceBetween:
        justifyContent = 'space-between;';
        break;
      case JustifyContent.spaceEvenly:
        justifyContent = 'space-evenly;';
        break;
      case JustifyContent.stretch:
        justifyContent = 'stretch;';
        break;
    }
    props.push(`display: flex;`);
    props.push(`flex-wrap: wrap;`);
    props.push(`flex-direction: ${flexDirection};`);
    props.push(`justify-content: ${justifyContent}`);
    props.push(`width: ${this.width};`);
    props.push(`height: ${this.height};`);
    props.push(`${BACKGROUND_COLOR};`);
    props.push(this.flexProps.styles || '');
    props.push(';');
    return props.join('');
  }

  add(component: string) {
    this.html.push(component);
  }

  addDivider() {
    let width = '';
    let height = '';

    if (this.flexProps.itemsHorizontal === false) {
      width = 'auto';
      height = '1px';
    } else {
      width = '1px';
      height = 'auto';
    }
    const DIVIDER = `<div class='divider' style='width:${width};
                                              height:${height}; 
                                              display:block;
                                              background-color: rgba(0,0,0,.12); 
                                              margin:4px;
                    '>

    </div>`;

    this.html.push(DIVIDER);
  }

  construct(): string {
    return `<div class='flex' style= '
              ${this.getFlexProps()} '>  
              ${this.html.join('')}
              </div>`.replace(/\n*\t*\r*\s+/g, ' ');
  }
}
