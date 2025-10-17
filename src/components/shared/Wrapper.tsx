interface props {
  children: React.ReactNode;
  className?: string;
}

export default function Wrapper({ children, className }: props) {
  return (
    <div
      className={`mx-auto py-6 px-4 sm:max-w-4xl lg:max-w-5xl xl:max-w-7xl ${className}`}
    >
      {children}
    </div>
  );
}
