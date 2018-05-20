import { Colors, getThemeShades } from './Common';

export interface Bar {
  itemsHorizontal?: boolean; // by default false
  percentFull: number;
  color?: Colors; // by default grey color
}

export let getProgressBar = (bar: Bar): string => {
  const themeShades = getThemeShades(bar.color);
  const BAR_HEIGHT = bar.itemsHorizontal ? '4px' : '100%';
  const BAR_WIDTH = bar.itemsHorizontal ? '100%' : '4px';
  const FILL_HEIGHT = bar.itemsHorizontal ? `4px` : `${bar.percentFull}%`;
  const FILL_WIDTH = bar.itemsHorizontal ? `${bar.percentFull}%` : '4px';

  return `
              <div class='bar' style=' 
                                      background-color:${themeShades.l1} ;
                                      width: ${BAR_WIDTH}; 
                                      height: ${BAR_HEIGHT};
                                        '> 
                 <div class='barFill' style='
                                      background-color: ${themeShades.l3};
                                      width:${FILL_WIDTH}; 
                                      height: ${FILL_HEIGHT}; '>
                 </div>
              </div>
    `;
};
