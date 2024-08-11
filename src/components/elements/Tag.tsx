export default function Tag({
  children,
  ...rest
}: React.ComponentPropsWithoutRef<'button'>) {
  return (
    <button
      {...rest}
      className='primary rounded-md bg-neutral-200 px-1.5 py-0.5 font-medium disabled:cursor-not-allowed disabled:bg-opacity-20 disabled:text-opacity-20 dark:bg-neutral-800'
    >
      {children}
    </button>
  );
}
