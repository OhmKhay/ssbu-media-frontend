export default function Container({
  center = false,
  vCenter = false,
  dark = false,
  dark_blue = false,
  wide = false,
  medium = false,
  wideOnMobile = false,
  small = false,
  padding = false,
  overflow = false,
  minHeight = null,
  dotBackground = false,
  children,
  mobileStyle = null,
  divider = false,
  hpr = false,
  pdt = false,
  org_c = false,
  padding_org = false,
  padding_loader= false,

  ...props
}) {
  return (
    <div {...props}>
      <style jsx>
        {`
           {
            width: 100%;
            margin: 0 auto;
            ${medium ? 'width: 1024px;' : ''}
            ${org_c ? 'max-width: 1360px:' : ''}
            padding: ${padding ? '1.25rem' : '0'} ${wide ? '0' : '1rem'};
            ${padding_org ? 'padding: 0rem 5.25rem 5.25rem 5.25rem' : ''};

            ${padding_loader ? 'padding: -1rem 5.25rem 5.25rem 5.25rem' : ''};

            ${wide && !small && !medium & !org_c ? '' : 'max-width: 1200px;'}
            ${small ? 'max-width: 768px;' : ''}
            ${center ? 'text-align: center;' : ''}
            ${dark ? 'background: #111;' : ''}
        
            ${dark ? 'color: #f1f1f1;' : ''}
            ${dark_blue ? 'background-color:  #122f66;' : ''}
            ${dark_blue ? 'border-top: 1px solid #eaeaea;' : ''}
            ${dark_blue ? 'border-bottom: 1px solid #eaeaea;' : ''}
            ${wide && !overflow ? 'overflow: hidden;' : ''}
            ${minHeight ? `min-height: ${minHeight}px;` : ''}
            ${vCenter ? 'display: flex; align-items: center;' : ''}
            ${hpr ? ' position: relative;' : ''}
            ${pdt ? ' padding-top: 4rem' : ''}
            ${dotBackground
              ? `
              background-image: radial-gradient(#D7D7D7 1px, transparent 1px), radial-gradient(#d7d7d7 1px, transparent 1px);
              background-position: 0 0, 25px 25px;
              background-size: 50px 50px;
            `
              : ''}
            ${divider ? `border-top: 1px solid rgba(0,0,0,0.1);` : ''}
          }
          :after {
            // BFC
            content: '';
            display: table;
            clear: both;
          }

          // CSS only media query for tablet
          @media screen and (max-width: 960px) {
            div {
              padding: ${padding ? '4rem' : '0'} ${wide || wideOnMobile ? '0' : '2rem'};
              ${wideOnMobile && !overflow ? 'overflow: hidden;' : ''}
            }
          }
          // CSS only media query for mobile
          @media screen and (max-width: 640px) {
            div {
              padding: ${padding ? '4.6rem' : '0'} ${wide || wideOnMobile ? '0' : '1rem'};
              ${mobileStyle || ''}
            }
          }
        `}
      </style>
      {children}
    </div>
  );
}
