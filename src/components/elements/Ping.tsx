export default function Ping() {
  return (
    <span className='relative flex h-3 w-3'>
      <span className='bg-gradient-linear absolute inline-flex h-full w-full rounded-full opacity-75' />
      <span className='bg-gradient-linear relative inline-flex h-3 w-3 rounded-full' />
    </span>
  );
}
