import TippyModule from '@tippyjs/react/headless';
import { cn } from '@/lib/utils';

type TippyComponent = typeof TippyModule;

// CJS package: under SSR the default import is the module object, not the component.
const Tippy: TippyComponent =
  (TippyModule as unknown as { default?: TippyComponent }).default ?? TippyModule;

interface TooltipProps {
  children: React.ReactElement;
  label: string;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  tooltipClassName?: string;
}

export default function Tooltip({
  children,
  label,
  placement = 'top',
  tooltipClassName,
}: TooltipProps) {
  return (
    <Tippy
      placement={placement}
      offset={[0, 12]}
      render={(attrs) => (
        <div
          {...attrs}
          className={cn(
            'primary max-w-xs rounded-md bg-neutral-200 px-3 py-2 text-center text-sm font-medium leading-relaxed shadow-md dark:bg-neutral-800',
            tooltipClassName
          )}
        >
          {label}
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}
