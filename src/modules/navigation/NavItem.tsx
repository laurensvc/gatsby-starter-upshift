import { Link } from 'gatsby';
import styled from 'styled-components';
import paletteTheme from '../../config/theme/paletteTheme';
import media from '../../config/utils/media';

const NavItem = styled(Link)`
  color: ${paletteTheme.secondary.shade4};
  margin-left: 25px;
  transition: all 0.2s ease-in-out;

  &.activeLink {
    color: ${paletteTheme.primary.shade5};
    font-weight: 700;
  }

  &:hover {
    color: ${paletteTheme.primary.shade5};
    transition: all 0.2s ease-in-out;
  }

  ${media.tabletAndBelow`
    font-size: 16px;
    margin-left: 15px;
  `};
`;

export default NavItem;

// TODO: on small screens
