interface ButtonLinkProps {
  href: string;
  children?: React.ReactNode;
  className?: string;
  target?: string;
}

function ButtonLink({ href, children, target, className }:
  ButtonLinkProps) {
  return (
    <div>
      <a
        href={href}
        children={children}
        className={className}
        target={target}>
      </a>
    </div>
  )
}

export default ButtonLink
