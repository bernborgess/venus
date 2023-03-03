import {
  Build as BuildIcon,
  InsertDriveFile as InsertDriveFileIcon
} from "@mui/icons-material";

import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { useRouting } from "../../routes/useRouting";

type MuiIcon = OverridableComponent<
  SvgIconTypeMap<unknown, "svg">>
  & {
    muiName: string;
  }

export type UserRole = "artist" | "admin";

type Drawer = {
  title: string,
  navigate: () => void,
  Icon: MuiIcon,
  cName: string,
  userRoles: UserRole[]
}

export function navbarDrawerData(): Drawer[] {

  const {
    navigateToAllAlbums,
    navigateToAllArtists
  } = useRouting();

  return [
    {
      title: "Artists",
      navigate: navigateToAllArtists,
      Icon: BuildIcon,
      cName: "nav-text",
      userRoles: ["admin"]
    },
    {
      title: "Albums",
      navigate: navigateToAllAlbums,
      Icon: InsertDriveFileIcon,
      cName: "nav-text",
      userRoles: ["artist", "admin"]
    },
  ];
}
