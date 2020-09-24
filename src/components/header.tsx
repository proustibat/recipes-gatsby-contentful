import { Link, useI18next, useTranslation } from 'gatsby-plugin-react-i18next';
import React, { FormEvent } from 'react';

type HeaderProps = {
  siteTitle: string;
};

const Header = ({ siteTitle }: HeaderProps) => {
  const { languages, changeLanguage } = useI18next();
  const { i18n } = useTranslation();

  const handleSelectLanguage = ({ target }: FormEvent<HTMLSelectElement>) => {
    changeLanguage((target as HTMLSelectElement).value);
  };

  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <select id="lang" onChange={handleSelectLanguage} value={i18n.language}>
          {languages.map(lng => (
            <option key={lng} value={lng}>
              {lng}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
};

export default Header;
