import { Colors } from './components';
import * as fs from 'fs';

export interface PageProps {
  theme?: Colors;
  width?: string;
  height?: string;
  backgroundColor?: string;
  styles?: string;
}

const DEFAULT_BACKGROUND = 'rgba(242,242,242,1.12)';

export class Page {
  pageProps: PageProps;
  html: string[];
  constructor(pageProps: PageProps) {
    this.pageProps = pageProps;
    this.pageProps.theme = this.pageProps.theme || undefined;
    this.pageProps.width = this.pageProps.width || 'auto';
    this.pageProps.height = this.pageProps.height || 'auto';
    this.pageProps.backgroundColor = this.pageProps.backgroundColor || DEFAULT_BACKGROUND;
    this.html = [];
  }

  private getPageProps() {
    let props: string[] = [];
    props.push(`width: ${this.pageProps.width};`);
    props.push(`height: ${this.pageProps.width};`);
    props.push(`background-color: ${this.pageProps.backgroundColor};`);
    props.push('margin: 8px;');
    props.push(this.pageProps.styles || '');
    props.push(';');
    return props.join('');
  }

  add(component: string) {
    this.html.push(component);
  }

  construct(): string {
    const STYLES = fs.readFileSync(__dirname + '/Styles/styles.css', 'utf8');
    return `<html><head><title></title><style>${STYLES}</style></head><body style= ' 
               ${this.getPageProps()} '>
               ${this.html.join('')}
               </body></html>`.replace(/\n*\t*\r*\s+/g, ' ');
  }
}
