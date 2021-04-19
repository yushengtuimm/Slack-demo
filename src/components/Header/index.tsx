import React from "react";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import {
  Container,
  HeaderLeft,
  HeaderAvatar,
  HeaderSearch,
  HeaderRight,
} from "./Header.style";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { Avatar } from "@material-ui/core";

function Header() {
  const [user] = useAuthState(auth);

  return (
    <Container>
      <HeaderLeft>
        <HeaderAvatar
          src={user?.photoURL || ""}
          alt={user?.displayName || ""}
          onClick={() => auth.signOut()}
        />
        <AccessTimeIcon />
      </HeaderLeft>

      <HeaderSearch>
        <SearchIcon />
        <input placeholder={"Search Slack"} />
      </HeaderSearch>

      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
    </Container>
  );
}

export default Header;
