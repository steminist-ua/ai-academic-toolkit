// src/components/SidebarProfile.jsx
'use client'

import { useMemo } from 'react'
import { ThemeSwitch } from 'nextra-theme-docs'
import { sidebarProfile } from '../config/sidebar-profile'
import { withBasePath } from '../utils/basePath'

const normalizeAffiliations = (affiliations = []) =>
  affiliations.filter((item) => item && (item.logo?.src || item.name))

const SidebarProfile = () => {
  const { name, role, description, photo, affiliations, showThemeToggle, email } =
    sidebarProfile
  const normalizedAffiliations = useMemo(() => {
    return normalizeAffiliations(affiliations)
  }, [affiliations])
  const fullWidthAffiliation =
    normalizedAffiliations.length === 1 &&
    normalizedAffiliations[0].logo?.fullWidth
      ? normalizedAffiliations[0]
      : null

  return (
    <section className="sidebar-profile-card">
      {(photo?.src || name || role) && (
        <div className="sidebar-profile-card__header">
          {photo?.src && (
            <img
              src={withBasePath(photo.src)}
              alt={photo.alt || name || 'Автор політики'}
              className="sidebar-profile-card__photo"
              loading="lazy"
            />
          )}
          {(name || role) && (
            <div className="sidebar-profile-card__identity">
              {name && <p className="sidebar-profile-card__name">{name}</p>}
              {role && <p className="sidebar-profile-card__role">{role}</p>}
              {email && <a className="sidebar-profile-card__email" href={`mailto:${email}`}>{email}</a>}
            </div>
          )}
        </div>
      )}

      {description && (
        <p className="sidebar-profile-card__description">{description}</p>
      )}

      {fullWidthAffiliation ? (
        <div className="sidebar-profile-card__affiliations sidebar-profile-card__affiliations--wide">
          <img
            src={withBasePath(fullWidthAffiliation.logo.src)}
            alt={
              fullWidthAffiliation.logo.alt ||
              fullWidthAffiliation.name ||
              'Логотип партнера'
            }
            className="sidebar-profile-card__banner"
            loading="lazy"
          />
           <span className="sidebar-profile-card__logo--text">
                {fullWidthAffiliation.orgName}
              </span>
        </div>
      ) : (
        normalizedAffiliations.length > 0 && (
          <div className="sidebar-profile-card__affiliations">
          {normalizedAffiliations.map((affiliation, index) => {
            const { url, name: orgName, logo } = affiliation
            const content = logo?.src ? (
              <img
                src={withBasePath(logo.src)}
                alt={logo.alt || orgName || 'Логотип партнера'}
                className="sidebar-profile-card__logo"
                loading="lazy"
              />
            ) : (
              <span className="sidebar-profile-card__logo--text">
                {orgName}
              </span>
            )
            

            return url ? (
              <a
                key={`${orgName || 'affiliation'}-${index}`}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="sidebar-profile-card__link"
              >
                {content}
              </a>
            ) : (
              <span
                key={`${orgName || 'affiliation'}-${index}`}
                className="sidebar-profile-card__link"
              >
                {content}
              </span>
            )
          })}
          </div>
        )
      )}
    </section>
  )
}

export default SidebarProfile
