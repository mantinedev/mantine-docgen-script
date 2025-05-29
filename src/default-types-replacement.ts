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
  'Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> | undefined':
    'React.ComponentPropsWithoutRef<"input">',
  '(text: string, reviver?: (this: any, key: string, value: any) => any) => any':
    'typeof JSON.parse',
  '{ (value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string; (value: any, replacer?: (string | number)[], space?: string | number): string; }':
    'typeof JSON.stringify',
  'Omit<Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref">, "value"> | undefined':
    'React.ComponentPropsWithoutRef<"input">',
  '(__CloseButtonProps & ElementProps<"button">) | undefined': 'CloseButtonProps',
  'Partial<Omit<TransitionProps, "mounted">> | undefined': 'TransitionProps',
  'Omit<Props, "ref"> | undefined': 'RechartsProps',
  '[DefaultMantineColor, DefaultMantineColor] | undefined': '[MantineColor, MantineColor]',
  'CategoricalChartProps | undefined': 'RechartsProps',
  'Omit<TooltipProps<any, any>, "ref"> | undefined': 'RechartsProps',
  '((series: RadarChartSeries) => Omit<Props, "ref">) | Omit<Props, "ref"> | undefined':
    '((series: RadarChartSeries) => RechartsProps) | RechartsProps',
  'TimePickerAmPmLabels | undefined': '{ am: string; pm: string }',
  'TimePickerFormat | undefined': '"12h" | "24h"',
  '(Omit<DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, "ref"> & DataAttributes) | undefined':
    'React.ComponentPropsWithoutRef<"select">',
  '(CloseButtonProps & ElementProps<"button"> & DataAttributes) | undefined': 'CloseButtonProps',
  '(Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & DataAttributes) | undefined':
    'React.ComponentPropsWithoutRef<"input">',
  'Omit<CategoricalChartProps & RefAttributes<{ readonly eventEmitterSymbol: Symbol; clipPathId: string; accessibilityManager: AccessibilityManager; ... 63 more ...; UNSAFE_componentWillUpdate?(nextProps: Readonly<...>, nextState: Readonly<...>, nextContext: any): void; }>, "ref"> | undefined':
    'RechartsProps',
  '((time: string) => Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & DataAttributes) | undefined':
    '(time: string) => React.ComponentPropsWithoutRef<"button">',
  'CalendarLevel | undefined': '"month" | "year" | "decade"',
  'DayOfWeek | undefined': '0 | 1 | 2 | 3 | 4 | 5 | 6',
  'DayOfWeek[] | undefined': '(0 | 1 | 2 | 3 | 4 | 5 | 6)[]',
  'RenderDay | undefined': '(date: string) => React.ReactNode',
  'DateLabelFormat | undefined': 'string | ((date: string) => string)',
  'DatePickerType | undefined': '"range" | "multiple" | "default"',
  'ZIndex | undefined': 'React.CSSProperties["zIndex"]',
  'AccordionHeadingOrder | undefined': '2 | 3 | 4 | 5 | 6',
};
