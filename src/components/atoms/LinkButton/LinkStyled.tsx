import styled from "styled-components";
import Link from "next/link";
export const NavLink = styled(Link)`
  color: var(--gog-primary);
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    color: #000608;
  }

  &.active {
    color: var(--gog-pastel-teal-darker);
  }
`;
