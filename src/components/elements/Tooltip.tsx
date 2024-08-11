import Tippy from '@tippyjs/react/headless';

interface TooltipProps {
  children: React.ReactElement;
  label: string;
  placement: 'top' | 'bottom';
}

export default function Tooltip({ children, label, placement }: TooltipProps) {
  return (
    <Tippy
      placement={placement}
      render={() => (
        <div className='primary max-w-xs rounded-md bg-neutral-200 px-4 py-3 text-center text-sm leading-relaxed dark:bg-neutral-800'>
          {label}
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}
