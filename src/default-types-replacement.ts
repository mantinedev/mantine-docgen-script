// Types that should be replaced with other types
// Used to make generated types more readable
export const DEFAULT_TYPE_REPLACEMENT = {
  'DefaultMantineColor | undefined': 'MantineColor',
  DefaultMantineColor: 'MantineColor',
  ReactText: 'string | number',
  'ReactElement<any, string | ((props: any) => ReactElement<any, any>) | (new (props: any) => Component<any, any, any>)>':
    'ReactElement',
  'string | number | boolean | {} | ReactElement<any, string | ((props: any) => ReactElement<any, any>) | (new (props: any) => Component<any, any, any>)> | ReactNodeArray | ReactPortal | ((value: number) => ReactNode)':
    'ReactNode | (value: number) => ReactNode',
  'Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> | undefined':
    'React.ComponentPropsWithoutRef<"div">',
  'PointerEvents | undefined': 'React.CSSProperties["pointerEvents"]',
  'Width<string | number> | undefined': 'React.CSSProperties["width"]',
  ReactNode: 'React.ReactNode',
  '(string & {}) | MantineSize | undefined': 'MantineSize',
  '(Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & { ref?: ((instance: HTMLDivElement | null) => void) | ... 2 more ... | undefined; }) | undefined':
    'React.ComponentPropsWithoutRef<"div">',
  'Omit<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "ref"> | undefined':
    'React.ComponentPropsWithoutRef<"img">',
  'Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> | undefined':
    'React.ComponentPropsWithoutRef<"button">',
};
