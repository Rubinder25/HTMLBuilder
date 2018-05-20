import { Colors, getThemeShades } from './Common';

export interface Container {
  alignItems: Position;
  backgroundColor?: Colors; // by default #fff
  contents: string;
  height?: string;
  width?: string;
  styles?: string;
}
export enum Position {
  topCenter,
  bottomCenter,

  center,

  rightTop,
  rightCenter,
  rightBottom,

  leftTop,
  leftCenter,
  leftBottom
}

export const getContainer = (container: Container): string => {
  let fAlignProps = '';
  let dAlignProps = '';
  const BACKGROUND_COLOR = container.backgroundColor ? getThemeShades(container.backgroundColor).l1 : '#fff';

  switch (container.alignItems) {
    case Position.leftTop:
      fAlignProps = `justify-content:flex-start;`;
      dAlignProps = `margin-bottom: auto;`;
      break;
    case Position.leftCenter:
      fAlignProps = `justify-content:flex-start;`;
      dAlignProps += `margin-bottom: auto;`;
      dAlignProps += `margin-top: auto;`;
      break;
    case Position.leftBottom:
      fAlignProps = `justify-content:flex-start;`;
      dAlignProps = `margin-top: auto;`;
      break;
    case Position.rightTop:
      fAlignProps = `justify-content:flex-end;`;
      dAlignProps = `margin-bottom: auto;`;
      break;
    case Position.rightCenter:
      fAlignProps = `justify-content:flex-end;`;
      dAlignProps += `margin-bottom: auto;`;
      dAlignProps += `margin-top: auto;`;
      break;
    case Position.rightBottom:
      fAlignProps = `justify-content:flex-end;`;
      dAlignProps = `margin-top: auto;`;
      break;
    case Position.topCenter:
      fAlignProps = `justify-content:center;`;
      dAlignProps += `margin-bottom: auto;`;
      break;
    case Position.bottomCenter:
      fAlignProps = `justify-content:center;`;
      dAlignProps += `margin-top: auto;`;
      break;
    case Position.center:
      fAlignProps = `justify-content:center;`;
      dAlignProps += `margin-bottom: auto;`;
      dAlignProps += `margin-top: auto;`;
      break;
  }
  return `
           <div class='container' style='
                                  ${fAlignProps}
                                  background-color: ${BACKGROUND_COLOR};
                                  width: ${container.width || 'auto'};
                                  height: ${container.height || 'auto'};
                                  ${container.styles || ''};
            '> 
              <div style='${dAlignProps}'> ${container.contents}</div>
          </div>  
    `;
};
